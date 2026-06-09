const STORAGE_PREFIX = 'task-tracker';

export const STORAGE_KEYS = {
  tasks: 'tasks',
  filters: 'filters',
  sorting: 'sorting',
} as const;

function getKey(key: string): string {
  return `${STORAGE_PREFIX}:${key}`;
}

export function storageGet<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(getKey(key));
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function storageSet<T>(key: string, value: T): void {
  try {
    localStorage.setItem(getKey(key), JSON.stringify(value));
  } catch {
    // Ignore quota and serialization errors.
  }
}

export function storageRemove(key: string): void {
  try {
    localStorage.removeItem(getKey(key));
  } catch {
    // Ignore storage access errors.
  }
}
