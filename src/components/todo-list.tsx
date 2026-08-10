import { useState } from "react";
import { Check, Plus, X } from "lucide-react";
import { usePlanner } from "./planner-provider";
import { cn } from "@/lib/utils";

export function TodoList() {
  const { todos, addTodo, toggleTodo, removeTodo, clearDone } = usePlanner();
  const [draft, setDraft] = useState("");
  const done = todos.filter((t) => t.done).length;

  return (
    <section aria-labelledby="todo-heading" className="card-calm p-5 sm:p-6">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <div className="min-w-0">
          <p className="eyebrow">Today's list</p>
          <h2 id="todo-heading" className="mt-1 text-xl">
            Small things, done
          </h2>
        </div>
        <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
          {done}/{todos.length}
        </span>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!draft.trim()) return;
          addTodo(draft.trim());
          setDraft("");
        }}
        className="mt-5 flex items-center gap-2"
      >
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Add a to-do…"
          aria-label="New to-do"
          className="min-w-0 flex-1 rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors duration-300 focus:border-ring"
        />
        <button
          type="submit"
          aria-label="Add to-do"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground transition-all duration-300 hover:opacity-90 active:scale-95"
        >
          <Plus className="h-4 w-4" aria-hidden />
        </button>
      </form>

      <ul className="mt-4 space-y-1">
        {todos.map((t) => (
          <li key={t.id} className="group flex items-center gap-2">
            <button
              type="button"
              onClick={() => toggleTodo(t.id)}
              className="flex min-w-0 flex-1 items-center gap-3 rounded-lg px-2 py-2 text-left text-sm transition-colors duration-300 hover:bg-secondary"
            >
              <span
                className={cn(
                  "grid h-5 w-5 shrink-0 place-items-center rounded-full border transition-all duration-300",
                  t.done ? "border-primary bg-primary text-primary-foreground" : "border-border",
                )}
              >
                {t.done && <Check className="h-3 w-3" aria-hidden />}
              </span>
              <span className={cn("truncate", t.done && "text-muted-foreground line-through")}>
                {t.title}
              </span>
            </button>
            <button
              type="button"
              onClick={() => removeTodo(t.id)}
              aria-label={`Remove ${t.title}`}
              className="shrink-0 rounded-full p-2 text-muted-foreground opacity-0 transition-all duration-300 hover:text-destructive focus-visible:opacity-100 group-hover:opacity-100"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="mt-4 text-sm text-muted-foreground">
          Empty list, clear head. Add the first small thing.
        </p>
      )}

      {done > 0 && (
        <button
          type="button"
          onClick={clearDone}
          className="mt-5 text-xs text-muted-foreground underline-offset-4 transition-colors duration-300 hover:text-foreground hover:underline"
        >
          Clear {done} finished
        </button>
      )}
    </section>
  );
}
