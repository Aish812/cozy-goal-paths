import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, LifeBuoy } from "lucide-react";
import { HELP_GUIDES } from "@/lib/help-guides";

const TITLE = "Help Guides — Procrastination, Stress, Anxiety & Sleep";
const DESCRIPTION =
  "Calm, practical help guides for procrastination, stress, anxiety, insomnia and low motivation — with small daily habits you can plan and tick off in Stack It Up.";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cozy-goal-paths.lovable.app/help" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://cozy-goal-paths.lovable.app/help" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Stack It Up help guides",
          itemListElement: HELP_GUIDES.map((g, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: g.title,
            url: `https://cozy-goal-paths.lovable.app/help/${g.slug}`,
          })),
        }),
      },
    ],
  }),
  component: HelpPage,
});

function HelpPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <p className="eyebrow">Help guides</p>
      <h1 className="mt-3 text-3xl leading-tight sm:text-4xl lg:text-5xl">
        Stuck, wired or wide awake at 3am?
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Short, kind guides for the things that quietly derail a plan — procrastination, stress,
        anxiety, insomnia and days with no motivation left. Each one ends with a small routine you
        can load into your planner and tick off.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {HELP_GUIDES.map((g) => (
          <article key={g.slug} className="card-calm flex flex-col p-5 sm:p-6">
            <span aria-hidden className="text-2xl">
              {g.emoji}
            </span>
            <h2 className="mt-3 text-xl leading-snug">{g.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{g.short}</p>
            <Link
              to="/help/$slug"
              params={{ slug: g.slug }}
              className="mt-4 inline-flex items-center gap-2 self-start rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
            >
              Read the guide
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>

      <section className="card-calm mt-12 p-6 sm:p-8">
        <LifeBuoy aria-hidden className="h-5 w-5 text-accent" />
        <h2 className="mt-3 text-2xl">Turn a guide into a routine</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Every guide suggests a simple daily rhythm. Borrow a ready-made routine, or start your own
          three-task day and tick tonight's box.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/templates"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90"
          >
            Browse routine templates
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm transition-colors duration-300 hover:bg-secondary"
          >
            Back to my plan
          </Link>
        </div>
      </section>

      <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
        These guides are general wellbeing information, not medical advice. If something is affecting
        your daily life, please speak to a doctor or a qualified therapist.
      </p>
    </div>
  );
}
