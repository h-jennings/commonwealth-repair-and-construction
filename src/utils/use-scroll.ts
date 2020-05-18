import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

export function useMobileScroll() {
  // Set a single object `{ x: ..., y: ..., direction: ... }` once on init
  const [scroll, setScroll] = useState({
    scrollX: document.body.getBoundingClientRect().left,
    scrollY: document.body.getBoundingClientRect().top,
  });

  const listener = () => {
    // `prev` provides us the previous state: https://reactjs.org/docs/hooks-reference.html#functional-updates
    setScroll(() => ({
      scrollX: document.body.getBoundingClientRect().left,
      scrollY: -document.body.getBoundingClientRect().top,
    }));
  };
  const delay = 200;

  useEffect(() => {
    window.addEventListener('touchmove', debounce(listener, delay));
    return () => window.removeEventListener('touchmove', listener);
  }, []);

  return scroll;
}
