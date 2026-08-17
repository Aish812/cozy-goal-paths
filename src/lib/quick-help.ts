export type QuickTip = { tip: string; example: string };

export type QuickHelp = {
  slug: string;
  linkLabel: string;
  fullGuideLabel: string;
  tips: QuickTip[];
};

export const QUICK_HELP: QuickHelp[] = [
  {
    slug: "procrastination",
    linkLabel: "Read more about stopping procrastinating",
    fullGuideLabel: "Read the full guide on how to stop procrastinating",
    tips: [
      {
        tip: "Break tasks into tiny steps",
        example:
          "Instead of \u201cwrite report,\u201d list: open document, write title, list 3 main points, write first paragraph. Start with just the first step.",
      },
      {
        tip: "Use the 5-minute rule",
        example:
          "Tell yourself \u201cI\u2019ll just do 5 minutes.\u201d Set a timer and clear your desk or open the assignment file \u2014 starting is the hard part.",
      },
      {
        tip: "Prioritise with a simple to-do list",
        example:
          "Write 3\u20136 tasks, number them by importance, and stay on #1 until it\u2019s done: 1) finish maths problems, 2) reply to emails, 3) plan tomorrow.",
      },
      {
        tip: "Remove obvious distractions",
        example:
          "Phone in another room, extra tabs closed, notifications off and Do Not Disturb on for 30 minutes while you study.",
      },
      {
        tip: "Reward yourself after small wins",
        example:
          "After 25 minutes of focused work, take a 5-minute break, a snack or a short video \u2014 effort linked to an immediate reward.",
      },
    ],
  },
  {
    slug: "stress",
    linkLabel: "Learn more about managing everyday stress",
    fullGuideLabel: "Read the full guide on managing everyday stress",
    tips: [
      {
        tip: "Use quick breathing resets",
        example: "Inhale for 4 seconds, hold for 4, exhale for 6\u20138. Repeat 5\u201310 times when you feel overwhelmed.",
      },
      {
        tip: "Move your body briefly",
        example: "A 10-minute walk, a desk stretch or a quick set of jumping jacks burns off stress hormones.",
      },
      {
        tip: "Try the 5-4-3-2-1 grounding technique",
        example: "Notice 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.",
      },
      {
        tip: "Set small, realistic daily goals",
        example: "\u201cToday I will: finish one work task, cook dinner, and rest for 20 minutes.\u201d",
      },
      {
        tip: "Schedule short \u201cworry time\u201d",
        example:
          "From 6:00\u20136:15pm, write worries down. Outside that slot, tell yourself \u201cI\u2019ll handle this in my worry time.\u201d",
      },
    ],
  },
  {
    slug: "anxiety",
    linkLabel: "Explore gentle ways to live with anxiety",
    fullGuideLabel: "Read the full guide on living with anxiety, gently",
    tips: [
      {
        tip: "Name what you feel",
        example: "\u201cI\u2019m noticing anxiety in my chest and a fear of making mistakes.\u201d Labelling it lowers the intensity.",
      },
      {
        tip: "Practise self-compassion instead of self-criticism",
        example: "Replace \u201cI\u2019m so weak\u201d with \u201cThis is hard right now, and I\u2019m doing my best.\u201d",
      },
      {
        tip: "Use \u201cand\u201d statements to hold both feelings",
        example: "\u201cI feel anxious, and I can still take one small step forward.\u201d",
      },
      {
        tip: "Create a small \u201ccalm kit\u201d",
        example: "A playlist, a comforting scent, a short breathing exercise, or a note with kind words on it.",
      },
      {
        tip: "Limit \u201cwhat if\u201d spirals with reality checks",
        example:
          "If you think \u201cI\u2019ll fail this exam,\u201d add: \u201cI\u2019ve prepared, and even if it\u2019s hard, I can handle the result.\u201d",
      },
    ],
  },
  {
    slug: "insomnia",
    linkLabel: "See detailed tips for sleeping better with insomnia",
    fullGuideLabel: "Read the full guide on sleeping better with insomnia",
    tips: [
      {
        tip: "Keep a consistent sleep schedule",
        example: "Aim for 11:00pm\u20137:00am every day, weekends included, to train your body clock.",
      },
      {
        tip: "Create a wind-down routine",
        example: "Dim the lights, read a book, take a warm shower, and avoid screens 30\u201360 minutes before bed.",
      },
      {
        tip: "Use the bed only for sleep",
        example: "Awake after ~20 minutes? Get up, do something calm in low light, and return when sleepy.",
      },
      {
        tip: "Limit caffeine and heavy meals late in the day",
        example: "No coffee after 2pm, and no large or spicy meals within 3 hours of bedtime.",
      },
      {
        tip: "Try a simple relaxation exercise in bed",
        example: "Progressive muscle relaxation: tense each muscle group for 5 seconds, then release, feet to head.",
      },
    ],
  },
  {
    slug: "low-motivation",
    linkLabel: "Discover how to cope when motivation is gone",
    fullGuideLabel: "Read the full guide on what to do when motivation is gone",
    tips: [
      {
        tip: "Start with the smallest possible action",
        example: "Instead of \u201cwork out for an hour,\u201d just put on your shoes and step outside. Action comes before motivation.",
      },
      {
        tip: "Connect to your \u201cwhy\u201d",
        example: "\u201cI\u2019m studying not just for grades, but to build a future I care about.\u201d",
      },
      {
        tip: "Use \u201cif\u2013then\u201d plans",
        example: "\u201cIf it\u2019s 7pm, then I will sit at my desk and open my notes for 10 minutes.\u201d",
      },
      {
        tip: "Focus on identity, not just outcomes",
        example: "\u201cI\u2019m someone who takes care of my health\u201d instead of \u201cI must lose 5kg.\u201d",
      },
      {
        tip: "Allow imperfect progress",
        example: "One paragraph, 5 push-ups or one page still counts \u2014 and keeps momentum alive.",
      },
    ],
  },
];

export function getQuickHelp(slug: string) {
  return QUICK_HELP.find((q) => q.slug === slug);
}
