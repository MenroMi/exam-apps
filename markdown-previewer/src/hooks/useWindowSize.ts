import {useState, useEffect} from 'react';

export type IWindowSize = {
  width?: number;
  height?: number;
};

// Hook
function useWindowSize() {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {windowSize};
}

export default useWindowSize;
