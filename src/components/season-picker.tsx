import { SEASONS } from "@/lib/seasons";
import { usePlanner } from "./planner-provider";
import { cn } from "@/lib/utils";

export function SeasonPicker({ className }: { className?: string }) {
  const { season, setSeason } = usePlanner();

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-1.5 rounded-full border border-border bg-card/70 p-1.5 backdrop-blur",
        className,
      )}
      role="group"
      aria-label="Choose a season"
    >
      {SEASONS.map((s) => {
        const active = s.id === season;
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => setSeason(s.id)}
            aria-pressed={active}
            title={s.mood}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-all duration-300 ease-out",
              active
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground",
            )}
          >
            <span aria-hidden>{s.emoji}</span>
            <span className="hidden sm:inline">{s.label}</span>
          </button>
        );
      })}
    </div>
  );
}
