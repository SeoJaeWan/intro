import { useEffect, useRef } from 'react';

interface UseIntervalProps {
  callback: () => void;
  delay: number;
}

const useInterval = (props: UseIntervalProps) => {
  const { callback, delay } = props;
  const callbackRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      if (callbackRef.current) {
        callbackRef.current();
      }
    };

    const id = setInterval(tick, delay);

    return () => clearInterval(id);
  }, [delay]);
};

export default useInterval;
