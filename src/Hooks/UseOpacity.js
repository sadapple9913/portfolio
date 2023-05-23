import { useState, useEffect } from 'react';


export function useOpacity(defaultDelay = 600) {
  const [opacity, setOpacity] = useState(0);


  useEffect(() => {
    setOpacity(0);
    const timeoutId = setTimeout(() => {
      setOpacity(1);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      setOpacity(0);
    };
  }, []);

  const handleOpacityChange = (callback, delay = defaultDelay) => {
    setOpacity(0);
    setTimeout(() => {
      callback();
      setOpacity(1);
    }, delay);
  };

  return { opacity, handleOpacityChange };
}