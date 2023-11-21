// Define a generic function to save data to localStorage
export const saveLocal = <T>(key: string, data: T): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Define a generic function to retrieve data from localStorage and parse it as type T
export const getLocal = <T>(key: string): T | null => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value) as T;
  }
  return null;
};

// Define a function to remove data from localStorage
export const removeLocal = (key: string): void => {
  localStorage.removeItem(key);
};
