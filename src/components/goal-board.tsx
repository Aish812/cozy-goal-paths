import { useState } from "react";
import { Check, Plus, Trash2, Target } from "lucide-react";
import { usePlanner } from "./planner-provider";
import { SEASONS } from "@/lib/seasons";
import { cn } from "@/lib/utils";

export function GoalBoard() {
  const { goals, addGoal, removeGoal, addMilestone, toggleMilestone } = usePlanner();
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [target, setTarget] = useState("");
  const [stepDrafts, setStepDrafts] = useState<Record<string, string>>({});

  return (
    <section aria-labelledby="goals-heading" className="space-y-6">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:justify-between">
        <div className="min-w-0">
          <p className="eyebrow">Target goals</p>
          <h2 id="goals-heading" className="mt-1 text-2xl sm:text-3xl">
            What are you stacking?
          </h2>
        </div>
        <p className="shrink-0 text-sm text-muted-foreground">
          {goals.length} {goals.length === 1 ? "goal" : "goals"}
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!title.trim()) return;
          addGoal({ title: title.trim(), note: note.trim(), target });
          setTitle("");
          setNote("");
          setTarget("");
        }}
        className="card-calm space-y-3 p-5"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Name a goal, e.g. “Run 10km by December”"
          aria-label="Goal title"
          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-ring"
        />
        <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
          <input
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Why it matters (optional)"
            aria-label="Goal note"
            className="w-full min-w-0 rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors duration-300 focus:border-ring"
          />
          <input
            type="date"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            aria-label="Target date"
            className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-muted-foreground outline-none transition-colors duration-300 focus:border-ring"
          />
        </div>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 hover:shadow-md active:scale-[0.98] sm:w-auto"
        >
          <Plus className="h-4 w-4" aria-hidden /> Add goal
        </button>
      </form>

      {goals.length === 0 ? (
        <p className="card-calm p-8 text-center text-sm text-muted-foreground">
          Nothing here yet — plant your first goal above, or borrow a routine from the Routines page.
        </p>
      ) : (
        <ul className="grid gap-5 md:grid-cols-2">
          {goals.map((goal) => {
            const total = goal.milestones.length;
            const done = goal.milestones.filter((m) => m.done).length;
            const pct = total ? Math.round((done / total) * 100) : 0;
            const seasonMeta = SEASONS.find((s) => s.id === goal.season);

            return (
              <li key={goal.id} className="card-calm flex flex-col gap-4 p-5">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <div className="min-w-0">
                    <p className="eyebrow">
                      {seasonMeta?.emoji} {seasonMeta?.label}
                      {goal.target ? ` · by ${goal.target}` : ""}
                    </p>
                    <h3 className="mt-1.5 text-lg leading-snug">{goal.title}</h3>
                    {goal.note && (
                      <p className="mt-1.5 text-sm text-muted-foreground">{goal.note}</p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => removeGoal(goal.id)}
                    aria-label={`Delete goal ${goal.title}`}
                    className="shrink-0 rounded-full p-2 text-muted-foreground transition-colors duration-300 hover:bg-secondary hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" aria-hidden />
                  </button>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>
                      {done}/{total || 0} steps
                    </span>
                    <span>{pct}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary transition-[width] duration-500 ease-out"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>

                <ul className="space-y-1.5">
                  {goal.milestones.map((m) => (
                    <li key={m.id}>
                      <button
                        type="button"
                        onClick={() => toggleMilestone(goal.id, m.id)}
                        className="flex w-full items-center gap-3 rounded-lg px-2 py-1.5 text-left text-sm transition-colors duration-300 hover:bg-secondary"
                      >
                        <span
                          className={cn(
                            "grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-all duration-300",
                            m.done
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border",
                          )}
                        >
                          {m.done && <Check className="h-3 w-3" aria-hidden />}
                        </span>
                        <span
                          className={cn(
                            "min-w-0 transition-colors duration-300",
                            m.done && "text-muted-foreground line-through",
                          )}
                        >
                          {m.title}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const draft = (stepDrafts[goal.id] ?? "").trim();
                    if (!draft) return;
                    addMilestone(goal.id, draft);
                    setStepDrafts((prev) => ({ ...prev, [goal.id]: "" }));
                  }}
                  className="mt-auto flex items-center gap-2"
                >
                  <Target className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                  <input
                    value={stepDrafts[goal.id] ?? ""}
                    onChange={(e) =>
                      setStepDrafts((prev) => ({ ...prev, [goal.id]: e.target.value }))
                    }
                    placeholder="Add a small step…"
                    aria-label={`Add a step to ${goal.title}`}
                    className="min-w-0 flex-1 border-b border-transparent bg-transparent py-1 text-sm outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-ring"
                  />
                </form>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
