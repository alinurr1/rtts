import { useState } from "react";

export const useLocalStorageState = <T>(property: string, initialValue: T) => {
  const existingValue = window.localStorage.getItem(property);
  const [storageValue, setStorageValue] = 
    useState(existingValue ? JSON.parse(existingValue) : initialValue);

  const setValue = (value: T) => {
    setStorageValue(value);
    window.localStorage.setItem(property, JSON.stringify(value));
  };

  return [storageValue, setValue];
};