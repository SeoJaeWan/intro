import { PropsWithChildren, useEffect, useRef } from 'react';
import RunnerStyle from './runner.style';
import Percent from '@/utils/percent';

const Runner = (props: PropsWithChildren) => {
  const { children } = props;
  const runnerBoxRef = useRef<HTMLDivElement>(null);
  const runnerRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (runnerBoxRef.current && runnerRef.current) {
        const runnerBox = runnerBoxRef.current;
        const runner = runnerRef.current;

        const { left, width } = runnerBox.getBoundingClientRect();

        const percent =
          1 - Math.min(100, Math.max(0, Percent(0, -width, -left))) / 100;
        let transform = `perspective(5000px) translateY(-100%) translateX(${width * percent}px) rotateY(180deg)`;

        if (percent === 1) {
          transform += ' rotateX(90deg)';
          runner.style.opacity = '0';
        } else {
          runner.style.opacity = '1';
        }

        runner.style.transform = transform;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <RunnerStyle.Container ref={runnerBoxRef}>
      <RunnerStyle.Runner
        src={'/assets/images/common/runner.png'}
        alt={''}
        width={1146}
        height={1236}
        ref={runnerRef}
      />
      {children}
    </RunnerStyle.Container>
  );
};

export default Runner;
