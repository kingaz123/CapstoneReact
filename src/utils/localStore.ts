export const saveLocal = <T>(key: string, data: T): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocal = <T>(key: string): T | null => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value) as T;
  }
  return null;
};

export const removeLocal = (key: string): void => {
  localStorage.removeItem(key);
};
