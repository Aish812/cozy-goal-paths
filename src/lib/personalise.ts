import wallpaperPainting from "@/assets/wallpaper-painting.jpg";
import wallpaperWatercolour from "@/assets/wallpaper-watercolour.jpg";

export type MarkId = "tick" | "fire" | "bolt" | "star" | "heart" | "sprout";

export const MARKS: { id: MarkId; glyph: string; label: string }[] = [
  { id: "tick", glyph: "✓", label: "Tick mark" },
  { id: "fire", glyph: "🔥", label: "Fire" },
  { id: "bolt", glyph: "⚡", label: "Electric charge" },
  { id: "star", glyph: "⭐", label: "Star" },
  { id: "heart", glyph: "❤️", label: "Heart" },
  { id: "sprout", glyph: "🌱", label: "Sprout" },
];

export type WallpaperId =
  | "season"
  | "painting"
  | "watercolour"
  | "dots"
  | "grid"
  | "aurora";

export const WALLPAPERS: {
  id: WallpaperId;
  label: string;
  hint: string;
  /** CSS background-image value layered over the seasonal gradient. */
  image?: string;
  size?: string;
}[] = [
  { id: "season", label: "Seasonal glow", hint: "Soft gradient that follows your season" },
  {
    id: "painting",
    label: "Oil painting",
    hint: "Hand-painted autumn hills",
    image: `url(${wallpaperPainting})`,
    size: "cover",
  },
  {
    id: "watercolour",
    label: "Watercolour",
    hint: "Misty blue mountains in the rain",
    image: `url(${wallpaperWatercolour})`,
    size: "cover",
  },
  {
    id: "dots",
    label: "Notebook dots",
    hint: "Calm dotted paper",
    image:
      "radial-gradient(color-mix(in oklab, var(--accent) 60%, transparent) 1.5px, transparent 1.6px)",
    size: "22px 22px",
  },
  {
    id: "grid",
    label: "Graph paper",
    hint: "Fine planner grid",
    image:
      "linear-gradient(to right, color-mix(in oklab, var(--accent) 35%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--accent) 35%, transparent) 1px, transparent 1px)",
    size: "34px 34px, 34px 34px",
  },
  {
    id: "aurora",
    label: "Aurora blooms",
    hint: "Drifting colour clouds",
    image:
      "radial-gradient(60% 45% at 12% 8%, color-mix(in oklab, var(--accent) 45%, transparent), transparent 70%), radial-gradient(50% 40% at 88% 18%, color-mix(in oklab, var(--primary) 30%, transparent), transparent 72%), radial-gradient(70% 50% at 50% 100%, color-mix(in oklab, var(--accent) 32%, transparent), transparent 70%)",
    size: "cover",
  },
];

export type CursorId = "default" | "leaf" | "spark" | "pen" | "flame";

export const CURSORS: { id: CursorId; label: string; glyph: string }[] = [
  { id: "default", label: "System", glyph: "🖱️" },
  { id: "leaf", label: "Falling leaf", glyph: "🍂" },
  { id: "spark", label: "Sparkle", glyph: "✨" },
  { id: "pen", label: "Fountain pen", glyph: "🖊️" },
  { id: "flame", label: "Little flame", glyph: "🔥" },
];

function emojiCursor(emoji: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"><text x="3" y="25" font-size="22">${emoji}</text></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}") 4 4, auto`;
}

export const CURSOR_CSS: Record<CursorId, string> = {
  default: "auto",
  leaf: emojiCursor("🍂"),
  spark: emojiCursor("✨"),
  pen: emojiCursor("🖊️"),
  flame: emojiCursor("🔥"),
};
