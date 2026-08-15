import { CURSORS, MARKS, WALLPAPERS } from "@/lib/personalise";
import { usePlanner } from "./planner-provider";
import { cn } from "@/lib/utils";

function Row({
  title,
  hint,
  children,
}: {
  title: string;
  hint: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <p className="eyebrow">{title}</p>
      <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
      <div className="mt-3 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

const pill =
  "rounded-full border px-3 py-1.5 text-sm transition-all duration-300 ease-out hover:-translate-y-0.5";

export function PersonaliseBar({ className }: { className?: string }) {
  const { mark, setMark, wallpaper, setWallpaper, cursor, setCursor } = usePlanner();

  return (
    <section
      aria-labelledby="personalise-heading"
      className={cn("card-calm p-5 sm:p-7", className)}
    >
      <p className="eyebrow">Make it yours</p>
      <h2 id="personalise-heading" className="mt-1 text-2xl">
        Pick your mark, wallpaper and cursor
      </h2>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
        Small choices, big motivation. Tick with a flame, hang a painting behind your plan, and
        trail a sparkle wherever you point.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <Row title="Completion mark" hint="Shown on every ticked day">
          {MARKS.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMark(m.id)}
              aria-pressed={m.id === mark}
              aria-label={m.label}
              title={m.label}
              className={cn(
                pill,
                m.id === mark
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-background/60 text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              <span aria-hidden>{m.glyph}</span>
            </button>
          ))}
        </Row>

        <Row title="Wallpaper" hint="Themes, paintings and papers">
          {WALLPAPERS.map((w) => (
            <button
              key={w.id}
              type="button"
              onClick={() => setWallpaper(w.id)}
              aria-pressed={w.id === wallpaper}
              title={w.hint}
              className={cn(
                pill,
                w.id === wallpaper
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-background/60 text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              {w.label}
            </button>
          ))}
        </Row>

        <Row title="Cursor" hint="Your pointer, your personality">
          {CURSORS.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCursor(c.id)}
              aria-pressed={c.id === cursor}
              title={c.label}
              className={cn(
                pill,
                c.id === cursor
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-background/60 text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              <span aria-hidden>{c.glyph}</span>
              <span className="ml-1.5 hidden sm:inline">{c.label}</span>
            </button>
          ))}
        </Row>
      </div>
    </section>
  );
}
