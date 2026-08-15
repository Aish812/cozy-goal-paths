import { useMemo } from "react";
import { Flame, Sparkles, Trophy } from "lucide-react";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { MARKS } from "@/lib/personalise";
import { usePlanner } from "./planner-provider";
import { cn } from "@/lib/utils";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function monthKey(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

export function MonthTracker() {
  const today = new Date();
  const key = monthKey(today);
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const { mark } = usePlanner();
  const glyph = (MARKS.find((m) => m.id === mark) ?? MARKS[0]).glyph;
  const store = useLocalStorage<Record<string, number[]>>("stackitup.monthTicks", {});
  const ticked = store.value[key] ?? [];

  const toggle = (day: number) =>
    store.setValue((prev) => {
      const current = prev[key] ?? [];
      const next = current.includes(day)
        ? current.filter((d) => d !== day)
        : [...current, day].sort((a, b) => a - b);
      return { ...prev, [key]: next };
    });

  const { streak, points, level, pct } = useMemo(() => {
    const set = new Set(ticked);
    let s = 0;
    for (let d = today.getDate(); d >= 1; d--) {
      if (set.has(d)) s++;
      else if (d !== today.getDate()) break;
      else continue;
    }
    const p = ticked.length * 10 + Math.max(0, s - 1) * 5;
    return {
      streak: s,
      points: p,
      level: Math.floor(p / 100) + 1,
      pct: Math.round((ticked.length / daysInMonth) * 100),
    };
  }, [ticked, daysInMonth, today]);

  const stats = [
    { icon: Flame, label: "Day streak", value: streak },
    { icon: Sparkles, label: "Points", value: points },
    { icon: Trophy, label: "Level", value: level },
  ];

  return (
    <section aria-labelledby="tracker-heading" className="card-calm p-5 sm:p-7">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="min-w-0">
          <p className="eyebrow">Don't break the chain</p>
          <h2 id="tracker-heading" className="mt-1 text-2xl">
            {MONTHS[today.getMonth()]} tick-box tracker
          </h2>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            One box a day. Tap it when you showed up — that's it. The bar fills, the streak grows,
            and the month quietly turns into proof. Ticks use your chosen mark ({glyph}).
          </p>
        </div>
        <div className="flex gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <s.icon aria-hidden className="mx-auto h-4 w-4 text-accent" />
              <p className="mt-1 font-display text-xl leading-none">{s.value}</p>
              <p className="mt-1 text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>
            {ticked.length} of {daysInMonth} days ticked
          </span>
          <span>{pct}%</span>
        </div>
        <div
          className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-secondary"
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Month completion"
        >
          <div
            className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-7 gap-1.5 sm:grid-cols-10 md:grid-cols-[repeat(auto-fit,minmax(2.25rem,1fr))]">
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
          const on = ticked.includes(day);
          const isToday = day === today.getDate();
          return (
            <button
              key={day}
              type="button"
              onClick={() => toggle(day)}
              aria-pressed={on}
              aria-label={`Day ${day}${on ? ", completed" : ""}`}
              className={cn(
                "grid aspect-square place-items-center rounded-lg border text-xs font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105",
                on
                  ? "border-primary bg-primary/12 text-primary shadow-sm"
                  : "border-border bg-background/60 text-muted-foreground hover:bg-secondary hover:text-foreground",
                isToday && !on && "border-accent ring-2 ring-accent/40",
              )}
            >
              {on ? (
                <span aria-hidden className="text-base leading-none">
                  {glyph}
                </span>
              ) : (
                day
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
