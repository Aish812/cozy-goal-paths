import { createFileRoute, Link } from "@tanstack/react-router";
import { SEASONS } from "@/lib/seasons";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Stack It Up — Calm Seasonal Planning" },
      {
        name: "description",
        content:
          "Stack It Up is a quiet planner built around the seasons: warm autumn focus, clear winter mornings, bright summer momentum and cosy rainy days.",
      },
      { property: "og:title", content: "About Stack It Up" },
      {
        property: "og:description",
        content: "Why a planner should feel like home — and how the seasonal moods work.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <p className="eyebrow">About</p>
      <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">A planner that feels like home.</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        Most productivity tools shout. Stack It Up is quiet on purpose: warm paper tones, generous
        spacing, and one honest list for today. You set a target, break it into small steps, and let
        the days stack up.
      </p>

      <h2 className="mt-12 text-2xl">The five moods</h2>
      <ul className="mt-6 space-y-4">
        {SEASONS.map((s) => (
          <li key={s.id} className="card-calm flex items-start gap-4 p-5">
            <span aria-hidden className="text-2xl">
              {s.emoji}
            </span>
            <div className="min-w-0">
              <h3 className="text-lg">{s.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.mood}</p>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl">Your data</h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        Goals, to-dos and your chosen season are saved in this browser only — no account, no signup.
        Clear your browser storage and it all goes with it.
      </p>

      <Link
        to="/"
        className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 hover:shadow-lg active:scale-[0.98]"
      >
        Back to my plan
      </Link>
    </div>
  );
}
