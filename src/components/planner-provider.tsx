import { createContext, useContext, useMemo, type ReactNode } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { seasonFromDate, type Season } from "@/lib/seasons";
import {
  STARTER_GOALS,
  STARTER_TODOS,
  uid,
  type Goal,
  type RoutineTemplate,
  type Todo,
} from "@/lib/planner-data";

type PlannerValue = {
  season: Season;
  setSeason: (s: Season) => void;
  goals: Goal[];
  todos: Todo[];
  addGoal: (input: { title: string; note: string; target: string }) => void;
  removeGoal: (id: string) => void;
  addMilestone: (goalId: string, title: string) => void;
  toggleMilestone: (goalId: string, milestoneId: string) => void;
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  clearDone: () => void;
  applyTemplate: (tpl: RoutineTemplate) => void;
};

const PlannerContext = createContext<PlannerValue | null>(null);

export function PlannerProvider({ children }: { children: ReactNode }) {
  const seasonStore = useLocalStorage<Season>("stackitup.season", seasonFromDate());
  const goalStore = useLocalStorage<Goal[]>("stackitup.goals", STARTER_GOALS);
  const todoStore = useLocalStorage<Todo[]>("stackitup.todos", STARTER_TODOS);

  const value = useMemo<PlannerValue>(() => {
    const setGoals = goalStore.setValue;
    const setTodos = todoStore.setValue;

    return {
      season: seasonStore.value,
      setSeason: (s) => seasonStore.setValue(s),
      goals: goalStore.value,
      todos: todoStore.value,
      addGoal: ({ title, note, target }) =>
        setGoals((prev) => [
          {
            id: uid(),
            title,
            note,
            target,
            season: seasonStore.value,
            milestones: [],
            createdAt: Date.now(),
          },
          ...prev,
        ]),
      removeGoal: (id) => setGoals((prev) => prev.filter((g) => g.id !== id)),
      addMilestone: (goalId, title) =>
        setGoals((prev) =>
          prev.map((g) =>
            g.id === goalId
              ? { ...g, milestones: [...g.milestones, { id: uid(), title, done: false }] }
              : g,
          ),
        ),
      toggleMilestone: (goalId, milestoneId) =>
        setGoals((prev) =>
          prev.map((g) =>
            g.id === goalId
              ? {
                  ...g,
                  milestones: g.milestones.map((m) =>
                    m.id === milestoneId ? { ...m, done: !m.done } : m,
                  ),
                }
              : g,
          ),
        ),
      addTodo: (title) =>
        setTodos((prev) => [{ id: uid(), title, done: false, createdAt: Date.now() }, ...prev]),
      toggleTodo: (id) =>
        setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))),
      removeTodo: (id) => setTodos((prev) => prev.filter((t) => t.id !== id)),
      clearDone: () => setTodos((prev) => prev.filter((t) => !t.done)),
      applyTemplate: (tpl) => {
        setGoals((prev) => [
          ...tpl.goals.map((title) => ({
            id: uid(),
            title,
            note: `From the “${tpl.name}” routine.`,
            target: "",
            season: tpl.season,
            milestones: [],
            createdAt: Date.now(),
          })),
          ...prev,
        ]);
        setTodos((prev) => [
          ...tpl.todos.map((title) => ({
            id: uid(),
            title,
            done: false,
            createdAt: Date.now(),
          })),
          ...prev,
        ]);
        seasonStore.setValue(tpl.season);
      },
    };
  }, [seasonStore, goalStore, todoStore]);

  return <PlannerContext.Provider value={value}>{children}</PlannerContext.Provider>;
}

export function usePlanner() {
  const ctx = useContext(PlannerContext);
  if (!ctx) throw new Error("usePlanner must be used inside PlannerProvider");
  return ctx;
}
