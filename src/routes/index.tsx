import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { GoalBoard } from "@/components/goal-board";
import { TodoList } from "@/components/todo-list";
import { SeasonPicker } from "@/components/season-picker";
import { usePlanner } from "@/components/planner-provider";
import { SEASONS } from "@/lib/seasons";
import heroDesk from "@/assets/hero-desk.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stack It Up — Seasonal Goal & To-Do Planner" },
      {
        name: "description",
        content:
          "Plan target goals, keep a calm to-do list, and borrow routines from real people — with a seasonal look that feels like home.",
      },
      { property: "og:title", content: "Stack It Up — Seasonal Goal & To-Do Planner" },
      {
        property: "og:description",
        content: "Plan target goals, keep a calm to-do list, and borrow routines from real people — with a seasonal look that feels like home.",
      },
    ],
  }),
  component: PlanPage,
});

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
            Stack small days
            <br />
            into a life you meant.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            {meta.mood} Set target goals, break them into gentle steps, and keep one honest list for
            today.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#goals-heading"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 hover:shadow-lg active:scale-[0.98]"
            >
              Start with one goal
            </a>
            <Link
              to="/templates"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-secondary"
            >
              Browse routines
            </Link>
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
            src={heroDesk}
            alt="A notebook, warm lamp and mug on a wooden desk beside a rainy autumn window"
            width={1600}
            height={1104}
            className="w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-lift)] transition-transform duration-500 ease-out hover:scale-[1.01]"
          />
          <div className="absolute -bottom-5 left-4 right-4 sm:left-6 sm:right-auto">
            <SeasonPicker className="shadow-[var(--shadow-soft)]" />
          </div>
        </div>
      </section>

      <div className="mt-16 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-10">
        <GoalBoard />
        <div className="lg:sticky lg:top-24 lg:self-start">
          <TodoList />
        </div>
      </div>
    </div>
  );
}
