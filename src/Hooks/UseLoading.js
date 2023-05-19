import { useState } from 'react';

const useLoading = (initialLoading = true, delay = 300) => {
  const [loaded, setLoaded] = useState(!initialLoading);
  const [showBar, setShowBar] = useState(initialLoading);

  const handleLoad = () => {
    setLoaded(true);
    setTimeout(() => {
      setShowBar(false);
    }, delay);
  };

  return { loaded, showBar, handleLoad };
};

export default useLoading;