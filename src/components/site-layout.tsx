import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { usePlanner } from "./planner-provider";
import { SeasonPicker } from "./season-picker";
import { SEASONS } from "@/lib/seasons";
import { CURSOR_CSS, WALLPAPERS } from "@/lib/personalise";

const NAV = [
  { to: "/", label: "Plan" },
  { to: "/templates", label: "Routines" },
  { to: "/about", label: "About" },
] as const;

const FOOTER_LINKS = [
  { to: "/supplements", label: "Supplements: pros & cons" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Use" },
  { to: "/cookies", label: "Cookie Policy" },
] as const;


export function SiteLayout({ children }: { children: ReactNode }) {
  const { season, wallpaper, cursor } = usePlanner();
  const current = SEASONS.find((s) => s.id === season)!;
  const paper = WALLPAPERS.find((w) => w.id === wallpaper)!;

  return (
    <div
      data-season={season}
      className="season-surface min-h-screen"
      style={{
        cursor: CURSOR_CSS[cursor],
        ...(paper.image
          ? {
              backgroundImage: `${paper.image}, var(--gradient-season)`,
              backgroundSize: paper.size ?? "cover",
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
            }
          : {}),
      }}
    >
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/80 backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-2.5 group">
            <span
              aria-hidden
              className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground text-base transition-transform duration-300 group-hover:rotate-6"
            >
              {current.emoji}
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-lg leading-tight">Stack It Up</span>
              <span className="hidden text-xs text-muted-foreground sm:block">
                one small thing at a time
              </span>
            </span>
          </Link>
          <nav className="flex items-center gap-1 text-sm">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "bg-secondary text-foreground" }}
                className="rounded-full px-3 py-1.5 text-muted-foreground transition-colors duration-300 hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="mt-20 border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="min-w-0">
            <p className="font-display text-lg">Stack It Up</p>
            <p className="mt-1 max-w-md text-sm text-muted-foreground">
              {current.mood} Your goals, lists and routines stay on this device.
            </p>
          </div>
          <SeasonPicker />
        </div>
        <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-border/70 px-4 py-6 text-sm sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
            {FOOTER_LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Stack It Up. Made for small, steady days.
          </p>
        </div>
      </footer>

    </div>
  );
}
