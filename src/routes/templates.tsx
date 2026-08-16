import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { TEMPLATES } from "@/lib/planner-data";
import { SEASONS } from "@/lib/seasons";
import { usePlanner } from "@/components/planner-provider";

export const Route = createFileRoute("/templates")({
  head: () => ({
    meta: [
      { title: "Routine Templates — Stack It Up" },
      {
        name: "description",
        content:
          "Borrow real daily routines — student, maker, athlete, family — and load their goals and to-dos into your own seasonal planner.",
      },
      { property: "og:title", content: "Routine Templates — Stack It Up" },
      {
        property: "og:description",
        content: "Real people's routines you can copy into your planner in one click.",
      },
      { property: "og:url", content: "https://cozy-goal-paths.lovable.app/templates" },
    ],
    links: [{ rel: "canonical", href: "https://cozy-goal-paths.lovable.app/templates" }],
  }),
  component: TemplatesPage,
});

function TemplatesPage() {
  const { applyTemplate } = usePlanner();
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <header className="max-w-2xl">
        <p className="eyebrow">Routines</p>
        <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">
          How other people spend a good day.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Steal shamelessly. Each routine loads its goals and to-dos straight into your planner, and
          shifts the app into that season's mood.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Struggling to keep one going?{" "}
          <Link
            to="/help"
            className="text-foreground underline decoration-accent underline-offset-4 transition-colors duration-300 hover:text-accent"
          >
            Read the help guides for procrastination, stress, anxiety and sleep
          </Link>
          .
        </p>
      </header>


      <ul className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {TEMPLATES.map((tpl) => {
          const meta = SEASONS.find((s) => s.id === tpl.season)!;
          return (
            <li key={tpl.id} className="card-calm flex flex-col p-6">
              <p className="eyebrow">
                {meta.emoji} {meta.label}
              </p>
              <h2 className="mt-2 text-xl leading-snug">{tpl.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{tpl.person}</p>
              <p className="mt-4 text-sm leading-relaxed">{tpl.summary}</p>

              <div className="mt-5 space-y-3 text-sm">
                <div>
                  <p className="eyebrow">Goals</p>
                  <ul className="mt-1.5 space-y-1 text-muted-foreground">
                    {tpl.goals.map((g) => (
                      <li key={g}>· {g}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow">Daily list</p>
                  <ul className="mt-1.5 space-y-1 text-muted-foreground">
                    {tpl.todos.map((t) => (
                      <li key={t}>· {t}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  applyTemplate(tpl);
                  navigate({ to: "/" });
                }}
                className="group mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 hover:shadow-md active:scale-[0.98]"
              >
                Use this routine
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
