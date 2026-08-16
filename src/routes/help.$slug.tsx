import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Info, Stethoscope } from "lucide-react";
import { getGuide, HELP_GUIDES } from "@/lib/help-guides";

export const Route = createFileRoute("/help/$slug")({
  loader: ({ params }) => {
    const guide = getGuide(params.slug);
    if (!guide) throw notFound();
    return { guide };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Guide not found — Stack It Up" }, { name: "robots", content: "noindex" }] };
    }
    const g = loaderData.guide;
    const url = `https://cozy-goal-paths.lovable.app/help/${params.slug}`;
    return {
      meta: [
        { title: g.seoTitle },
        { name: "description", content: g.seoDescription },
        { property: "og:title", content: g.seoTitle },
        { property: "og:description", content: g.seoDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: g.seoTitle,
            description: g.seoDescription,
            mainEntityOfPage: url,
          }),
        },
      ],
    };
  },
  notFoundComponent: GuideNotFound,
  component: GuidePage,
});

function GuideNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl">We couldn't find that guide</h1>
      <Link
        to="/help"
        className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground"
      >
        See all help guides
      </Link>
    </div>
  );
}

function GuidePage() {
  const { guide } = Route.useLoaderData();
  const others = HELP_GUIDES.filter((g) => g.slug !== guide.slug);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <Link
        to="/help"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
      >
        <ArrowLeft aria-hidden className="h-4 w-4" /> All help guides
      </Link>

      <p className="eyebrow mt-6">
        {guide.emoji} Help guide
      </p>
      <h1 className="mt-3 text-3xl leading-tight sm:text-4xl lg:text-5xl">{guide.title}</h1>
      <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
        {guide.intro}
      </p>

      <section className="card-calm mt-10 p-5 sm:p-6">
        <h2 className="text-xl">Signs you might recognise</h2>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
          {guide.signs.map((s) => (
            <li key={s} className="flex gap-3">
              <Info aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl">What actually helps</h2>
        <div className="mt-6 space-y-4">
          {guide.steps.map((s, i) => (
            <article key={s.title} className="card-calm p-5 sm:p-6">
              <p className="font-display text-2xl text-accent">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-lg leading-snug">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card-calm mt-12 p-5 sm:p-6">
        <h2 className="text-2xl">A day you can actually keep</h2>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
          {guide.routine.map((r) => (
            <li key={r} className="flex gap-3">
              <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90"
          >
            Plan this in my planner
          </Link>
          <Link
            to="/templates"
            className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm transition-colors duration-300 hover:bg-secondary"
          >
            Borrow a routine
          </Link>
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-border p-5 sm:p-6">
        <Stethoscope aria-hidden className="h-5 w-5 text-accent" />
        <h2 className="mt-3 text-xl">When to talk to someone</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{guide.seeSomeone}</p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl">More help guides</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {others.map((g) => (
            <Link
              key={g.slug}
              to="/help/$slug"
              params={{ slug: g.slug }}
              className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:bg-secondary hover:text-foreground"
            >
              {g.emoji} {g.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
