'use client';
import { PropsWithChildren, useEffect, useRef } from 'react';
import InformationStyle from './information.style';

interface InformationProps extends PropsWithChildren {
  delay?: number;
}

const Information = (props: InformationProps) => {
  const { delay = 0, children } = props;
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const info = infoRef.current;
    if (!info) return;

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

    observer.observe(info);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <InformationStyle.Container ref={infoRef} $delay={delay}>
      <span>{children}</span>
    </InformationStyle.Container>
  );
};

export default Information;
