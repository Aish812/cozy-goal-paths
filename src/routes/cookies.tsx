import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Cookie Policy — Stack It Up";
const DESCRIPTION =
  "Stack It Up uses browser local storage to remember your plan and season — not advertising cookies. Here is exactly what is stored and how to clear it.";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CookiePage,
});

function CookiePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">Cookie Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: 14 August 2026</p>

      <div className="mt-8 space-y-8 leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-2xl text-foreground">Cookies and similar storage</h2>
          <p className="mt-3">
            &ldquo;Cookies&rdquo; are small files a website can save in your browser. Stack It Up
            relies mainly on a related technology called local storage, which works in a similar way
            but is only read by this site in your own browser.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">What we store</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <span className="text-foreground">Your plan</span> — goals, milestones, to-dos and
              monthly ticks, kept in local storage so your work is still there next time.
            </li>
            <li>
              <span className="text-foreground">Your season</span> — the seasonal theme you picked,
              so the site opens in the mood you left it in.
            </li>
          </ul>
          <p className="mt-3">
            These are strictly functional: without them the planner would forget everything on every
            refresh. We do not use advertising or cross-site tracking cookies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">How to remove it</h2>
          <p className="mt-3">
            You can clear this data at any time from your browser settings (usually under
            &ldquo;Clear browsing data&rdquo; or &ldquo;Site settings&rdquo;, choosing cookies and
            site data for this site). Clearing it also deletes your saved plan.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">Third parties</h2>
          <p className="mt-3">
            If we ever add analytics or embedded third-party content that sets cookies, this page
            will be updated to describe it before or when it goes live.
          </p>
        </section>
      </div>

      <div className="mt-12 flex flex-wrap gap-3 text-sm">
        <Link to="/privacy" className="rounded-full border border-border px-4 py-2 transition-colors duration-300 hover:bg-secondary">
          Privacy Policy
        </Link>
        <Link to="/terms" className="rounded-full border border-border px-4 py-2 transition-colors duration-300 hover:bg-secondary">
          Terms of Use
        </Link>
        <Link to="/" className="rounded-full bg-primary px-4 py-2 text-primary-foreground transition-all duration-300 hover:opacity-90">
          Back to my plan
        </Link>
      </div>
    </div>
  );
}
