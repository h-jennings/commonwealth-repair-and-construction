import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

export function useMobileScroll() {
  let mounted = true;
  const [scroll, setScroll] = useState({
    scrollX: document.body.getBoundingClientRect().left,
    scrollY: document.body.getBoundingClientRect().top,
  });

  const listener = () => {
    if (mounted) {
      setScroll(() => ({
        scrollX: document.body.getBoundingClientRect().left,
        scrollY: -document.body.getBoundingClientRect().top,
      }));
    }
  };
  const delay = 200;

  const debouncedListener = debounce(listener, delay);

  useEffect(() => {
    window.addEventListener('touchmove', debouncedListener);
    return () => {
      mounted = false;
      debouncedListener.cancel();
      window.removeEventListener('touchmove', listener);
    };
  }, []);

  return scroll;
}
