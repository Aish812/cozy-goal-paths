import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Terms of Use — Stack It Up";
const DESCRIPTION =
  "The simple terms for using Stack It Up: what the planner is, what it isn't, how your locally stored content works and the limits of our responsibility.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:url", content: "https://cozy-goal-paths.lovable.app/terms" },
    ],
    links: [{ rel: "canonical", href: "https://cozy-goal-paths.lovable.app/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">Terms of Use</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: 14 August 2026</p>

      <div className="mt-8 space-y-8 leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-2xl text-foreground">Using Stack It Up</h2>
          <p className="mt-3">
            Stack It Up is a free planning tool for personal goals, to-do lists and daily habit
            tracking. By using it you agree to these terms. If you do not agree, please stop using
            the site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">Your content</h2>
          <p className="mt-3">
            Everything you write stays yours and is stored in your browser. Because we do not hold a
            copy, we cannot restore your plan if your browser data is cleared, your device is lost,
            or your browser removes stored data automatically. Keep your own notes for anything
            important.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">Acceptable use</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Do not attempt to disrupt, overload or reverse-engineer the service.</li>
            <li>Do not use the site to break the law or infringe anyone&apos;s rights.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">No professional advice</h2>
          <p className="mt-3">
            Routine templates, articles and other content on this site are for general information
            and inspiration only. They are not medical, nutritional, legal or financial advice.
            Speak to a qualified professional before making decisions about your health.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">Availability and changes</h2>
          <p className="mt-3">
            The site is provided &ldquo;as is&rdquo;, without warranties of any kind. Features may
            change, and the service may be unavailable at times. To the fullest extent permitted by
            law, we are not liable for indirect or consequential loss arising from your use of the
            site, including lost planner content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">Intellectual property</h2>
          <p className="mt-3">
            The Stack It Up name, design, written content and code belong to their respective
            owners. You may use the site for your own personal planning.
          </p>
        </section>
      </div>

      <div className="mt-12 flex flex-wrap gap-3 text-sm">
        <Link to="/privacy" className="rounded-full border border-border px-4 py-2 transition-colors duration-300 hover:bg-secondary">
          Privacy Policy
        </Link>
        <Link to="/cookies" className="rounded-full border border-border px-4 py-2 transition-colors duration-300 hover:bg-secondary">
          Cookie Policy
        </Link>
        <Link to="/" className="rounded-full bg-primary px-4 py-2 text-primary-foreground transition-all duration-300 hover:opacity-90">
          Back to my plan
        </Link>
      </div>
    </div>
  );
}
