import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Privacy Policy — Stack It Up";
const DESCRIPTION =
  "How Stack It Up handles your data: goals, to-dos and seasonal themes are stored in your own browser. No accounts, no tracking profiles, no selling data.";

export const Route = createFileRoute("/privacy")({
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
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: 14 August 2026</p>

      <div className="mt-8 space-y-8 leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-2xl text-foreground">The short version</h2>
          <p className="mt-3">
            Stack It Up is a planner you can use without an account. Your goals, steps, to-dos,
            monthly tick boxes and chosen season are saved in your own browser&apos;s local storage
            on the device you use. We do not have a copy of them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">What we store</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Planner content you type: goals, milestones, to-dos and daily ticks.</li>
            <li>Your seasonal theme preference.</li>
          </ul>
          <p className="mt-3">
            All of the above stays in your browser. Clearing your browser storage or using a
            different device or browser means starting with a fresh plan.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">What we do not do</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>We do not ask you to create an account or give us an email address.</li>
            <li>We do not sell or rent your information.</li>
            <li>We do not build advertising profiles about you.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">Hosting and server logs</h2>
          <p className="mt-3">
            Like most websites, the service that hosts Stack It Up may process basic technical
            request information (such as IP address, browser type and requested page) in order to
            deliver the site and keep it secure. We do not use that information to identify you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">Your choices</h2>
          <p className="mt-3">
            Because your plan lives on your device, you are in control of it: edit or delete any
            item at any time, or clear site data in your browser settings to remove everything.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">Children</h2>
          <p className="mt-3">
            Stack It Up is a general-purpose planner and is not directed at children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">Changes and contact</h2>
          <p className="mt-3">
            If this policy changes, the date above will be updated. Questions about privacy can be
            raised through the contact route you use to reach the site owner.
          </p>
        </section>
      </div>

      <div className="mt-12 flex flex-wrap gap-3 text-sm">
        <Link to="/terms" className="rounded-full border border-border px-4 py-2 transition-colors duration-300 hover:bg-secondary">
          Terms of Use
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
