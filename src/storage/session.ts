const VERSION = 1;
export const STORAGE_KEY = 'apparcar:preferences:v1';
export function encodePreferences(favorites: string[]): string {
  return JSON.stringify({ version: VERSION, favorites });
}
export function decodePreferences(value: string | null): string[] {
  try {
    const data = JSON.parse(value ?? 'null');
    return data?.version === VERSION && Array.isArray(data.favorites) && data.favorites.every((id: unknown) => typeof id === 'string') ? [...new Set<string>(data.favorites)] : [];
  } catch { return []; }
}
