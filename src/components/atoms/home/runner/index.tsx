import { PropsWithChildren, useRef } from 'react';
import RunnerStyle from './runner.style';
import useObserver from '@/hooks/useObserver';

const Runner = (props: PropsWithChildren) => {
  const { children } = props;
  const runnerRef = useObserver<HTMLImageElement>({
    threshold: 1,
  });
  const cancelRef = useRef<HTMLImageElement | null>(null);

  const handleRunnerEnd = () => {
    cancelRef.current?.classList.add('show');
  };

  return (
    <RunnerStyle.Container>
      <RunnerStyle.Runner
        src={'/assets/images/common/runner.png'}
        alt={''}
        width={1146}
        height={1236}
        ref={runnerRef}
        onAnimationEnd={handleRunnerEnd}
      />

      <RunnerStyle.Cancel
        src={'/assets/images/common/cancel.png'}
        alt=""
        width={1200}
        height={1200}
        ref={cancelRef}
      />
      {children}
    </RunnerStyle.Container>
  );
};

export default Runner;
