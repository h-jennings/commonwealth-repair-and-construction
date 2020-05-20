import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

export function useMobileScroll() {
  const [scroll, setScroll] = useState({
    scrollX: document.body.getBoundingClientRect().left,
    scrollY: document.body.getBoundingClientRect().top,
  });

  const listener = () => {
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
