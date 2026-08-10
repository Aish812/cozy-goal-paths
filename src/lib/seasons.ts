export type Season = "autumn" | "winter" | "spring" | "summer" | "rain";

export const SEASONS: {
  id: Season;
  label: string;
  emoji: string;
  mood: string;
}[] = [
  { id: "autumn", label: "Autumn", emoji: "🍂", mood: "Warm amber evenings, slow and steady progress." },
  { id: "winter", label: "Winter", emoji: "❄️", mood: "Quiet, clear focus under soft blue light." },
  { id: "spring", label: "Spring", emoji: "🌱", mood: "Fresh starts, small sprouts of new habits." },
  { id: "summer", label: "Summer", emoji: "☀️", mood: "Bright energy, long days, big momentum." },
  { id: "rain", label: "Rain", emoji: "🌧️", mood: "Cosy indoors, deep work with a warm mug." },
];

export function seasonFromDate(d = new Date()): Season {
  const m = d.getMonth();
  if (m >= 2 && m <= 4) return "spring";
  if (m >= 5 && m <= 7) return "summer";
  if (m >= 8 && m <= 10) return "autumn";
  return "winter";
}
