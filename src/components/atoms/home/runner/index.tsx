import { PropsWithChildren } from 'react';
import RunnerStyle from './runner.style';
import useObserver from '@/hooks/useObserver';

const Runner = (props: PropsWithChildren) => {
  const { children } = props;
  const runnerRef = useObserver<HTMLImageElement>({
    threshold: 1,
  });

  return (
    <RunnerStyle.Container>
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
