import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, CheckCircle2, HelpCircle, Pill } from "lucide-react";

const TITLE = "Pros and Cons of Taking Supplements — A Calm Guide";
const DESCRIPTION =
  "The real pros and cons of taking supplements: benefits of vitamins and dietary supplements, side effects, interactions, cost and how to build a supplement routine you'll actually keep.";

export const Route = createFileRoute("/supplements")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Pros and Cons of Taking Supplements" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://cozy-goal-paths.lovable.app/supplements" },
    ],
    links: [{ rel: "canonical", href: "https://cozy-goal-paths.lovable.app/supplements" }],
  }),
  component: SupplementsPage,
});

const PROS = [
  {
    title: "They fill genuine gaps in your diet",
    body: "Dietary supplements are useful when your food alone does not cover a nutrient — for example vitamin D in dark winters, vitamin B12 on a vegan diet, iron if a blood test shows you are low, or folic acid in pregnancy. Filling a real gap is the strongest reason to take anything.",
  },
  {
    title: "Convenience on busy days",
    body: "A multivitamin or omega-3 capsule takes seconds. On weeks when cooking balanced meals is unrealistic, a supplement can be a sensible safety net rather than an upgrade.",
  },
  {
    title: "Targeted support with professional guidance",
    body: "Doctors and dietitians recommend specific supplements for specific situations: deficiency, pregnancy, restricted diets, some medical conditions, or after certain surgeries. In those cases the benefit is clear and measurable through follow-up tests.",
  },
  {
    title: "A habit anchor that builds other habits",
    body: "Taking one pill at the same time every day is an easy habit to stack other routines onto — water, stretching, a two-minute plan for the day. That is exactly the kind of small, repeatable action Stack It Up is built to track.",
  },
];

const CONS = [
  {
    title: "They can't replace real food",
    body: "Whole foods bring fibre, protein, water and thousands of compounds that work together. A capsule copies a fraction of that. Supplements supplement — the name is the honest part.",
  },
  {
    title: "More is not better, and can be harmful",
    body: "Fat-soluble vitamins such as A, D, E and K build up in the body, and high doses of things like iron or vitamin B6 can cause real side effects. Stacking several products that each contain the same nutrient makes accidental overdosing easy.",
  },
  {
    title: "Interactions with medication",
    body: "Some supplements interfere with prescription drugs — St John's wort, high-dose vitamin K, and various herbal extracts are common examples. Always tell your doctor or pharmacist everything you take, including things bought off a shelf.",
  },
  {
    title: "Loose regulation and big claims",
    body: "In many countries supplements are regulated more like food than medicine, so a product does not have to prove it works before it is sold. Labels can promise energy, immunity or focus without evidence behind the wording.",
  },
  {
    title: "Cost adds up quietly",
    body: "A shelf of monthly subscriptions can cost more than the groceries that would do the same job. If you cannot say what a product is for and how you would know it is working, that is money without a purpose.",
  },
  {
    title: "False reassurance",
    body: "The riskiest side effect is psychological: feeling covered by pills and easing off sleep, movement and vegetables — the things that actually move the needle.",
  },
];

const QUESTIONS = [
  {
    q: "Do I have a reason, not just a feeling?",
    a: "A blood test, a restricted diet, a life stage or a clinician's advice is a reason. A social-media claim is not.",
  },
  {
    q: "What dose am I taking, in total?",
    a: "Add up every product plus fortified foods and check it against the recommended intake for your age and sex.",
  },
  {
    q: "How will I know if it worked?",
    a: "Decide the signal in advance — a repeat test, an energy log, or a symptom you are tracking — and give it a fair window.",
  },
  {
    q: "Have I checked it against my medication?",
    a: "One question to a pharmacist costs nothing and catches most interaction problems.",
  },
];

function SupplementsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <p className="eyebrow">Guide</p>
      <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">
        The pros and cons of taking supplements
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        Vitamins, minerals, protein powders, omega-3, magnesium for sleep — the supplement aisle
        promises a lot. Here is a calm look at the real benefits of dietary supplements, the
        drawbacks and side effects worth knowing, and how to decide whether a daily supplement
        deserves a place in your routine.
      </p>

      <p className="mt-6 flex gap-3 rounded-2xl border border-border bg-background/60 p-4 text-sm text-muted-foreground">
        <AlertTriangle aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
        <span>
          This article is general information, not medical advice. Talk to a doctor, pharmacist or
          registered dietitian before starting or stopping any supplement, especially if you are
          pregnant, taking medication or managing a health condition.
        </span>
      </p>

      <h2 className="mt-14 text-2xl sm:text-3xl">The pros of taking supplements</h2>
      <div className="mt-6 space-y-4">
        {PROS.map((item) => (
          <article key={item.title} className="card-calm p-5 sm:p-6">
            <h3 className="flex items-start gap-3 text-lg">
              <CheckCircle2 aria-hidden className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <span>{item.title}</span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </article>
        ))}
      </div>

      <h2 className="mt-14 text-2xl sm:text-3xl">The cons and side effects</h2>
      <div className="mt-6 space-y-4">
        {CONS.map((item) => (
          <article key={item.title} className="card-calm p-5 sm:p-6">
            <h3 className="flex items-start gap-3 text-lg">
              <AlertTriangle aria-hidden className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <span>{item.title}</span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </article>
        ))}
      </div>

      <h2 className="mt-14 text-2xl sm:text-3xl">Four questions before you buy</h2>
      <dl className="mt-6 space-y-4">
        {QUESTIONS.map((item) => (
          <div key={item.q} className="card-calm p-5 sm:p-6">
            <dt className="flex items-start gap-3 text-lg text-foreground">
              <HelpCircle aria-hidden className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <span>{item.q}</span>
            </dt>
            <dd className="mt-2 pl-8 text-sm leading-relaxed text-muted-foreground">{item.a}</dd>
          </div>
        ))}
      </dl>

      <h2 className="mt-14 text-2xl sm:text-3xl">Where to check the facts</h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        For dose limits, evidence summaries and interaction warnings, use sources that publish their
        reasoning rather than a product page:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
        <li>
          <a
            href="https://ods.od.nih.gov/factsheets/list-all/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-accent underline-offset-4 transition-colors duration-300 hover:text-accent"
          >
            NIH Office of Dietary Supplements fact sheets
          </a>{" "}
          — nutrient-by-nutrient evidence and upper limits.
        </li>
        <li>
          <a
            href="https://www.nhs.uk/conditions/vitamins-and-minerals/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-accent underline-offset-4 transition-colors duration-300 hover:text-accent"
          >
            NHS vitamins and minerals guide
          </a>{" "}
          — plain-language recommendations, including vitamin D advice for winter.
        </li>
      </ul>

      <h2 className="mt-14 text-2xl sm:text-3xl">Turn a decision into a routine</h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        Whatever you decide, the part that matters is consistency — and noticing honestly whether it
        helps. Add &ldquo;take supplement&rdquo; as a small daily step, tick the box each morning,
        and review it after a month instead of guessing.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 hover:shadow-lg active:scale-[0.98]"
        >
          <Pill aria-hidden className="h-4 w-4" />
          Track it in my plan
        </Link>
        <Link
          to="/templates"
          className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-secondary"
        >
          Browse daily routines
        </Link>
      </div>
    </div>
  );
}
