import type { Season } from "./seasons";

export type Milestone = { id: string; title: string; done: boolean };

export type Goal = {
  id: string;
  title: string;
  note: string;
  season: Season;
  target: string; // ISO date, may be empty
  milestones: Milestone[];
  createdAt: number;
};

export type Todo = {
  id: string;
  title: string;
  done: boolean;
  createdAt: number;
};

export type RoutineTemplate = {
  id: string;
  name: string;
  person: string;
  season: Season;
  summary: string;
  goals: string[];
  todos: string[];
};

export const uid = () => Math.random().toString(36).slice(2, 10);

export const STARTER_GOALS: Goal[] = [
  {
    id: "seed-1",
    title: "Read 6 books before the leaves fall",
    note: "Twenty pages a night with tea, no phone on the desk.",
    season: "autumn",
    target: "",
    milestones: [
      { id: "m1", title: "Pick the first three books", done: true },
      { id: "m2", title: "Finish book one", done: false },
      { id: "m3", title: "Write a short note per book", done: false },
    ],
    createdAt: Date.now(),
  },
  {
    id: "seed-2",
    title: "Build a calm 6am morning",
    note: "Wake, water, stretch, journal — in that order.",
    season: "winter",
    target: "",
    milestones: [
      { id: "m4", title: "Lights out by 10:30pm", done: true },
      { id: "m5", title: "Seven days in a row", done: false },
    ],
    createdAt: Date.now(),
  },
];

export const STARTER_TODOS: Todo[] = [
  { id: "t1", title: "Write down today's one big thing", done: true, createdAt: Date.now() },
  { id: "t2", title: "Walk 20 minutes, no headphones", done: false, createdAt: Date.now() },
  { id: "t3", title: "Tidy the desk before bed", done: false, createdAt: Date.now() },
];

export const TEMPLATES: RoutineTemplate[] = [
  {
    id: "tpl-autumn-student",
    name: "The Steady Student",
    person: "Maya, final-year student",
    season: "autumn",
    summary:
      "Study in warm two-hour blocks, one subject a day, evenings kept free for rest and a long walk.",
    goals: ["Finish the semester with no late submissions", "Revise one subject every evening"],
    todos: [
      "Review yesterday's notes (20 min)",
      "Two focused study blocks",
      "Walk before sunset",
      "Pack tomorrow's bag",
    ],
  },
  {
    id: "tpl-winter-maker",
    name: "Winter Deep Work",
    person: "Ravi, indie developer",
    season: "winter",
    summary:
      "Dark mornings for building, afternoons for people, and a hard stop at seven with a book.",
    goals: ["Ship one small feature every week", "Zero work after 7pm"],
    todos: [
      "Coffee + plan the day in three lines",
      "Deep work 7–10am, no notifications",
      "Reply to messages in one batch",
      "Close the laptop at 7pm",
    ],
  },
  {
    id: "tpl-spring-reset",
    name: "Spring Reset",
    person: "Ana, teacher",
    season: "spring",
    summary:
      "Small daily sprouts: one habit, one tidy corner, one page written. Nothing heroic, everything repeated.",
    goals: ["Move my body every day for 30 days", "Declutter one drawer a week"],
    todos: ["Morning stretch (10 min)", "One page of writing", "Tidy one small corner", "Water the plants"],
  },
  {
    id: "tpl-summer-athlete",
    name: "Long Summer Days",
    person: "Leo, half-marathon trainee",
    season: "summer",
    summary:
      "Run before the heat, eat well, sleep early. Weekends are for the long run and the lake.",
    goals: ["Run a half marathon in October", "Sleep 8 hours, five nights a week"],
    todos: ["5:30am run", "Protein-first breakfast", "Stretch + foam roll", "In bed by 10pm"],
  },
  {
    id: "tpl-rain-cosy",
    name: "Rainy Day Reset",
    person: "Noor, freelance designer",
    season: "rain",
    summary:
      "A slow, kind day for when energy is low: warm drink, one meaningful task, and a tidy inbox.",
    goals: ["Protect one slow day each week", "Keep the inbox under 20"],
    todos: ["Make tea and open the window", "One meaningful task only", "Inbox to twenty", "Early film, early sleep"],
  },
  {
    id: "tpl-autumn-family",
    name: "Home & Hearth",
    person: "The Ito family",
    season: "autumn",
    summary:
      "Shared evenings: cook together, plan the week on Sunday, one outing everyone looks forward to.",
    goals: ["Eat dinner together five nights a week", "One family outing each month"],
    todos: ["Sunday week-plan on the fridge", "Cook together", "Phones in the basket at dinner", "Read aloud 15 min"],
  },
];
