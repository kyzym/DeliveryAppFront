export const loadFromLocalStorage = (key, defaultValue) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null
      ? defaultValue
      : JSON.parse(serializedState);
  } catch (err) {
    console.error(`Error loading item ${key} from localStorage`, err);
    return defaultValue;
  }
};

export const saveToLocalStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error(`Error saving item ${key} to localStorage`, err);
  }
};
