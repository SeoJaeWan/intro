import { useEffect, useRef } from 'react';

const useObserver = <T extends Element>() => {
  const observerRef = useRef<T | null>(null);

  useEffect(() => {
    const observerEl = observerRef.current;
    if (!observerEl) return;

    const handleShow = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver,
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleShow, { threshold: 1 });

    observer.observe(observerEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  return observerRef;
};

export default useObserver;
