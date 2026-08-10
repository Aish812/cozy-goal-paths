import { useCallback, useEffect, useState } from "react";

/**
 * Hydration-safe persisted state: starts from `initial` on both server and
 * first client render, then loads the stored value after mount.
 */
export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw !== null) setValue(JSON.parse(raw) as T);
    } catch {
      /* ignore malformed storage */
    }
    setLoaded(true);
  }, [key]);

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* storage may be unavailable */
    }
  }, [key, value, loaded]);

  const reset = useCallback(() => setValue(initial), [initial]);

  return { value, setValue, loaded, reset } as const;
}
