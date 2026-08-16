import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  CalendarDays,
  Flame,
  Heart,
  Keyboard,
  ListChecks,
  MonitorSmartphone,
  MousePointerClick,
  Palette,
  Sparkles,
  Sun,
} from "lucide-react";
import { GoalBoard } from "@/components/goal-board";
import { TodoList } from "@/components/todo-list";
import { MonthTracker } from "@/components/month-tracker";
import { PersonaliseBar } from "@/components/personalise-bar";
import { SeasonPicker } from "@/components/season-picker";
import { usePlanner } from "@/components/planner-provider";
import { SEASONS } from "@/lib/seasons";
import heroDesk from "@/assets/hero-desk.jpg";

const TITLE = "Stack It Up — Daily Goal Planner & Habit Tracker";
const DESCRIPTION =
  "A free, calm daily planner: set goals, keep a short to-do list and tick off a monthly habit tracker with streaks and points. Seasonal themes, works on any phone.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cozy-goal-paths.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cozy-goal-paths.lovable.app/" }],
  }),
  component: PlanPage,
});

const FEATURES = [
  {
    icon: MonitorSmartphone,
    title: "Fits every screen",
    body: "Phone on the bus, tablet on the sofa, laptop at the desk — the same calm layout follows you everywhere.",
  },
  {
    icon: Flame,
    title: "Gentle gamification",
    body: "Streaks, points and levels that cheer you on. No guilt, no red numbers — just a chain you'll enjoy keeping.",
  },
  {
    icon: MousePointerClick,
    title: "Genuinely easy",
    body: "Quick-add, one-tap ticking and sensible defaults. You can plan a whole day before your tea cools down.",
  },
  {
    icon: ListChecks,
    title: "Goals, steps and to-dos",
    body: "Big targets break into small steps, and today's list stays short and honest. Everything lives in one place.",
  },
  {
    icon: CalendarDays,
    title: "Month at a glance",
    body: "A tick-box grid for the whole month. Fill a square each day and watch the progress bar quietly rise.",
  },
  {
    icon: Keyboard,
    title: "Kind by design",
    body: "Semantic HTML, keyboard-friendly controls, clear labels and calm contrast — built to be used by everyone.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Create your plan",
    body: "Name one target goal, break it into a few gentle steps, and add the three things that matter today.",
  },
  {
    n: "02",
    title: "Show up and tick",
    body: "Complete tasks, tick the day's box, and let the streak do the nagging so you don't have to.",
  },
  {
    n: "03",
    title: "Watch it stack up",
    body: "Points, levels and a filling progress bar turn quiet effort into something you can actually see.",
  },
];

const TESTIMONIALS = [
  { quote: "My daily routine finally sticks. The month grid is weirdly satisfying.", name: "Alex", role: "product designer" },
  { quote: "The seasonal backgrounds keep me inspired — it feels like a room, not an app.", name: "Priya", role: "PhD student" },
  { quote: "Three tasks a day, one tick box. That's all I needed to stop drifting.", name: "Sam", role: "freelance writer" },
];

function PlanPage() {
  const { season, goals, todos } = usePlanner();
  const meta = SEASONS.find((s) => s.id === season)!;
  const steps = goals.flatMap((g) => g.milestones);
  const stepsDone = steps.filter((m) => m.done).length;

  return (
    <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
      <section className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div className="min-w-0">
          <p className="eyebrow">{meta.emoji} {meta.label} season</p>
          <h1 className="mt-3 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            Plan beautifully.
            <br />
            Track effortlessly.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            A calm, fully responsive planner with gentle gamification, seasonal backgrounds and
            themes you can change with your mood. {meta.mood} Set goals, keep one honest list, and
            tick a box a day until the month is full.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#goals-heading"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 hover:shadow-lg active:scale-[0.98]"
            >
              Get started — it's free
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-secondary"
            >
              Learn more
            </a>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 text-sm">
            {[
              { label: "Goals", value: goals.length },
              { label: "Steps done", value: `${stepsDone}/${steps.length}` },
              { label: "To-dos", value: todos.filter((t) => !t.done).length },
            ].map((stat) => (
              <div key={stat.label} className="min-w-0">
                <dt className="eyebrow">{stat.label}</dt>
                <dd className="mt-1 font-display text-2xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <img
            src={heroSmall}
            srcSet={`${heroSmall} 760w, ${heroLarge} 1400w, ${heroDesk} 1600w`}
            sizes="(max-width: 1024px) 100vw, 45vw"
            alt="A notebook, warm lamp and mug on a wooden desk beside a rainy autumn window"
            width={1600}
            height={1104}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-lift)] transition-transform duration-500 ease-out hover:scale-[1.01]"
          />
          <div className="absolute -bottom-5 left-4 right-4 sm:left-6 sm:right-auto">
            <SeasonPicker className="shadow-[var(--shadow-soft)]" />
          </div>
        </div>
      </section>

      <div className="mt-16">
        <MonthTracker />
      </div>

      <div className="mt-6">
        <PersonaliseBar />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-10">
        <GoalBoard />
        <div className="lg:sticky lg:top-24 lg:self-start">
          <TodoList />
        </div>
      </div>

      <section aria-labelledby="features-heading" className="mt-24">
        <p className="eyebrow">Everything you need, nothing you don't</p>
        <h2 id="features-heading" className="mt-2 max-w-2xl text-3xl sm:text-4xl">
          A planner that works on every device — and on the days you don't feel like it
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article key={f.title} className="card-calm p-6">
              <span
                aria-hidden
                className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-secondary-foreground"
              >
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="vibe-heading" className="mt-24 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="card-calm p-6 sm:p-8">
          <span aria-hidden className="grid h-10 w-10 place-items-center rounded-xl bg-secondary">
            <Palette className="h-5 w-5" />
          </span>
          <h2 id="vibe-heading" className="mt-4 text-2xl">
            Choose your vibe
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Five seasonal moods change the whole room: colours, warmth and light. Pick the one that
            matches your day and switch whenever you like — your plan stays exactly where it was.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {SEASONS.map((s) => (
              <span
                key={s.id}
                className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs text-muted-foreground"
              >
                {s.emoji} {s.label}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <SeasonPicker />
          </div>
        </div>

        <div className="card-calm p-6 sm:p-8">
          <span aria-hidden className="grid h-10 w-10 place-items-center rounded-xl bg-secondary">
            <Sun className="h-5 w-5" />
          </span>
          <h2 className="mt-4 text-2xl">Seasonal backgrounds, softly</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Backgrounds shift with the season — amber autumn evenings, clear winter blue, spring
            green, bright summer, and grey-and-cosy rain. Transitions are slow and quiet, never
            flashy, so the page keeps feeling like home.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Daily focus: keep one to three priorities, not twenty.",
              "Goals, steps and to-dos live together in one calm place.",
              "Your plan is saved on this device — no account, no sign-up.",
              "Reduced-motion friendly and comfortable to read for long stretches.",
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <Sparkles aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-muted-foreground">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="how-it-works" className="mt-24 scroll-mt-24" id="how-it-works">
        <p className="eyebrow">How it works</p>
        <h2 id="how-it-works-heading" className="mt-2 text-3xl sm:text-4xl">
          Three steps, sixty seconds
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {STEPS.map((s) => (
            <article key={s.n} className="card-calm p-6">
              <p className="font-display text-3xl text-accent">{s.n}</p>
              <h3 className="mt-3 text-lg">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="loved-heading" className="mt-24">
        <p className="eyebrow">Why people stay</p>
        <h2 id="loved-heading" className="mt-2 text-3xl sm:text-4xl">
          Small days, kindly kept
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="card-calm p-6">
              <Heart aria-hidden className="h-5 w-5 text-accent" />
              <blockquote className="mt-4 text-base leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                {t.name} · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="start-heading"
        className="card-calm mt-24 p-8 text-center sm:p-12"
      >
        <p className="eyebrow">Getting started</p>
        <h2 id="start-heading" className="mx-auto mt-2 max-w-2xl text-3xl sm:text-4xl">
          Build your first day in sixty seconds
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Name your day, add three tasks, pick a season you like — then tick tonight's box. That's
          the whole method. Tomorrow you just do it again.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#tracker-heading"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 hover:shadow-lg active:scale-[0.98]"
          >
            Tick today's box
          </a>
          <Link
            to="/templates"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-secondary"
          >
            Borrow someone's routine
          </Link>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Building a health habit?{" "}
          <Link
            to="/supplements"
            className="text-foreground underline decoration-accent underline-offset-4 transition-colors duration-300 hover:text-accent"
          >
            Read the pros and cons of taking supplements
          </Link>{" "}
          before you add it to your routine. Struggling to start at all?{" "}
          <Link
            to="/help"
            className="text-foreground underline decoration-accent underline-offset-4 transition-colors duration-300 hover:text-accent"
          >
            Browse the help guides for procrastination, stress, anxiety and insomnia
          </Link>
          .
        </p>

      </section>
    </div>
  );
}
