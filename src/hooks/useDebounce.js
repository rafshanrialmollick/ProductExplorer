import { useState, useEffect } from 'react';

/**
 * Custom React hook for debouncing a value.
 * Delays updating the debounced value until after `delay` milliseconds
 * have elapsed since the last time the input value was changed.
 *
 * @template T
 * @param {T} value - The input value to debounce (e.g. search term)
 * @param {number} delay - Delay in milliseconds (default 350ms)
 * @returns {T} - The debounced value
 */
export function useDebounce(value, delay = 350) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set timer to update debounced value after specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function: cancel timer if value changes before delay expires (e.g. user keeps typing)
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
