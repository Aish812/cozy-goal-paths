export type HelpGuide = {
  slug: string;
  emoji: string;
  title: string;
  short: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  signs: string[];
  steps: { title: string; body: string }[];
  routine: string[];
  seeSomeone: string;
};

export const HELP_GUIDES: HelpGuide[] = [
  {
    slug: "procrastination",
    emoji: "🐢",
    title: "How to stop procrastinating",
    short: "Start smaller than feels reasonable, and let the first two minutes do the work.",
    seoTitle: "How to Stop Procrastinating — A Calm, Practical Guide",
    seoDescription:
      "Beat procrastination with a two-minute start, smaller steps and a daily tick box. Practical, kind strategies to stop putting things off and build momentum.",
    intro:
      "Procrastination is rarely laziness. It is usually a task that feels too big, too vague or too emotionally loaded to begin. The fix is not more pressure — it is a smaller, clearer first move.",
    signs: [
      "You reorganise, tidy or research instead of starting.",
      "The task has no obvious first step, only an outcome.",
      "You feel a flicker of dread when you think about it.",
      "You promise yourself you'll do it \"properly\" tomorrow.",
    ],
    steps: [
      {
        title: "Shrink the first step until it's silly",
        body: "Not \"write the report\" but \"open the document and type the heading\". A step you can't fail removes the negotiation entirely.",
      },
      {
        title: "Set a two-minute timer",
        body: "Agree to stop after two minutes. Most of the time you'll keep going, because starting — not working — was the hard part.",
      },
      {
        title: "Name the feeling behind the task",
        body: "Boredom, fear of judgement, confusion about what's wanted. Once you name it you can solve the real problem — often by asking one question.",
      },
      {
        title: "Make the day visible",
        body: "Three tasks, one tick box. A short, honest list beats a long, hopeful one, and a filled square is proof you can point at tomorrow.",
      },
    ],
    routine: [
      "Pick tomorrow's three tasks tonight, before you close the laptop.",
      "Start the day with the smallest of the three.",
      "Two-minute timer on anything you avoid twice.",
      "Tick the day's box, even on a half-done day.",
    ],
    seeSomeone:
      "If putting things off is costing you work, money or relationships, or comes with persistent low mood, it is worth talking to your doctor — chronic avoidance is often tangled up with depression or ADHD.",
  },
  {
    slug: "stress",
    emoji: "🌊",
    title: "Managing everyday stress",
    short: "Fewer open loops, more finished small things, and a body that gets to calm down.",
    seoTitle: "How to Manage Stress — Simple Daily Stress Relief Guide",
    seoDescription:
      "Practical stress management for busy days: reduce open loops, use breathing and movement for stress relief, and plan a lighter, calmer week you can keep.",
    intro:
      "Stress is your body responding to demands that feel bigger than your resources. You can work on both sides: lower the demands you control, and give your nervous system regular chances to settle.",
    signs: [
      "Tight shoulders, jaw or stomach through the day.",
      "Short fuse over small things.",
      "A head full of half-remembered tasks.",
      "Sleep that starts late and ends early.",
    ],
    steps: [
      {
        title: "Empty your head onto a list",
        body: "Unwritten tasks keep re-announcing themselves. Write every open loop down once — even the tiny ones — then choose the three that actually matter today.",
      },
      {
        title: "Finish something small on purpose",
        body: "Completion is a physical relief. One finished thing early in the day makes the rest feel manageable.",
      },
      {
        title: "Slow the exhale",
        body: "Breathe in for four, out for six, for a minute or two. A longer out-breath is one of the fastest ways to tell your body the emergency is over.",
      },
      {
        title: "Move, daylight, water, food",
        body: "A ten-minute walk outside does more for stress than an hour of worrying about it. Basic maintenance is not optional when you're stretched.",
      },
    ],
    routine: [
      "Morning: brain-dump, then pick three.",
      "Midday: ten minutes outside, away from screens.",
      "Late afternoon: close loops — reply, cancel, or reschedule.",
      "Evening: one calm ritual and a tick in the box.",
    ],
    seeSomeone:
      "If stress is constant, affecting your body, or you're relying on alcohol to switch off, please speak to a GP or a qualified therapist. Ongoing stress is treatable and you don't have to tough it out.",
  },
  {
    slug: "anxiety",
    emoji: "🫧",
    title: "Living with anxiety, gently",
    short: "Anxiety shrinks when you stop arguing with it and start acting at small scale.",
    seoTitle: "Anxiety Help Guide — Calm Habits for Anxious Days",
    seoDescription:
      "A gentle anxiety help guide: grounding techniques, worry time, and small daily habits that reduce anxious avoidance without pretending the feeling isn't there.",
    intro:
      "Anxiety is a smoke alarm with a sensitive setting. The goal isn't to feel nothing; it's to stop letting the alarm decide your day. Small, repeated actions teach your brain that the room isn't on fire.",
    signs: [
      "Racing thoughts that jump to worst cases.",
      "Avoiding messages, calls or plans, then feeling worse.",
      "Physical buzz: fast heart, restless legs, shallow breath.",
      "Reassurance helps for a minute, then wears off.",
    ],
    steps: [
      {
        title: "Ground in the room you're in",
        body: "Name five things you can see, four you can hear, three you can touch. It interrupts the spiral by giving attention somewhere real to land.",
      },
      {
        title: "Give worry an appointment",
        body: "Ten minutes, same time each day, to write worries down. Outside that window, note them and move on — you have a slot booked.",
      },
      {
        title: "Do the small avoided thing",
        body: "Open the email. Send the one-line reply. Avoidance is the fuel; each small approach quietly turns the volume down.",
      },
      {
        title: "Protect the basics",
        body: "Sleep, food, less caffeine, some movement. Anxiety gets much louder on an empty, wired, sleepless body.",
      },
    ],
    routine: [
      "Morning: no phone for the first ten minutes.",
      "One avoided task, deliberately, before lunch.",
      "Worry window at 6pm — on paper, then closed.",
      "Wind-down: slow breathing, dim light, box ticked.",
    ],
    seeSomeone:
      "If anxiety is stopping you working, sleeping or seeing people, or you have panic attacks, talk to your doctor. Therapy such as CBT and other treatments work well — this guide is support, not a diagnosis.",
  },
  {
    slug: "insomnia",
    emoji: "🌙",
    title: "Sleeping better with insomnia",
    short: "A steady wake-up time and a boring hour before bed beat any sleep gadget.",
    seoTitle: "Insomnia Help — How to Sleep Better, Night by Night",
    seoDescription:
      "Sleep better with practical insomnia help: consistent wake times, a wind-down routine, light and caffeine timing, and what to do when you can't fall asleep.",
    intro:
      "Sleep is a rhythm, not a switch. Most improvement comes from what you do in the sixteen hours before bed — and from getting out of the fight with the clock at 3am.",
    signs: [
      "Over twenty minutes to fall asleep, most nights.",
      "Waking at the same small hour, mind fully on.",
      "Weekend lie-ins that reset the whole rhythm.",
      "Dreading bedtime because of how it usually goes.",
    ],
    steps: [
      {
        title: "Anchor your wake-up time",
        body: "Same time every day, weekends included, even after a bad night. A fixed morning is what pulls your body clock into line.",
      },
      {
        title: "Get light early, dim it late",
        body: "Daylight within an hour of waking; low, warm light in the last hour. Light is the strongest signal your body has for when to be awake.",
      },
      {
        title: "Keep bed for sleep",
        body: "If you're awake and frustrated for more than twenty minutes, get up, sit somewhere dim and dull, and go back when sleepy.",
      },
      {
        title: "Make the last hour boring",
        body: "No email, no news, nothing you can lose an argument to. Same three small things each night so your brain knows what's coming.",
      },
    ],
    routine: [
      "Caffeine cut-off eight hours before bed.",
      "Screens down, lamps on, one hour before.",
      "Write tomorrow's three tasks so your head can stop holding them.",
      "Same wake-up alarm tomorrow — no matter what tonight does.",
    ],
    seeSomeone:
      "If poor sleep lasts more than a few weeks, or you snore heavily and wake unrefreshed, see a doctor: insomnia and sleep apnoea have specific, effective treatments (CBT-I first for insomnia).",
  },
  {
    slug: "low-motivation",
    emoji: "🕯️",
    title: "When motivation is gone",
    short: "Don't wait to feel like it. Lower the bar, keep the chain, let feeling follow action.",
    seoTitle: "No Motivation? A Kind Guide to Getting Going Again",
    seoDescription:
      "What to do when you have no motivation: minimum-viable days, habit streaks that survive bad days, and gentle ways to rebuild momentum without burning out.",
    intro:
      "Motivation is a mood, and moods are terrible managers. What actually holds a habit together is a bar low enough to clear on your worst day.",
    signs: [
      "Everything feels effortful, even things you like.",
      "You either do it perfectly or not at all.",
      "One missed day turns into a missed fortnight.",
      "You're tired in a way sleep doesn't fix.",
    ],
    steps: [
      {
        title: "Define your minimum day",
        body: "One task, five minutes, one tick. That's a complete day when you're running empty — and it keeps the chain alive.",
      },
      {
        title: "Never miss twice",
        body: "One missed day is weather. Two is a new pattern. Come back the next day at minimum size, no penance required.",
      },
      {
        title: "Make progress visible",
        body: "Squares filling in, points, a rising bar — seeing effort accumulate is more reliable than trying to feel inspired.",
      },
      {
        title: "Check for burnout, not laziness",
        body: "If rest, food and sleep are missing, no system will help. Fix the fuel before you redesign the routine.",
      },
    ],
    routine: [
      "Choose one minimum task the night before.",
      "Do it before anything optional.",
      "Tick the box — count the small day as a real day.",
      "Review weekly: what's worth keeping, what to drop.",
    ],
    seeSomeone:
      "If low motivation comes with lasting sadness, numbness or hopelessness, please talk to a doctor. Low mood is common, treatable, and not a character flaw.",
  },
];

export function getGuide(slug: string) {
  return HELP_GUIDES.find((g) => g.slug === slug);
}
