import { useState, useEffect } from "react";

export const useLocalStorageState = (initialState = [], key) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
};
