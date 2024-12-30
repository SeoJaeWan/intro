'use client';
import { PropsWithChildren } from 'react';
import InformationStyle from './information.style';
import useObserver from '@/hooks/useObserver';

interface InformationProps extends PropsWithChildren {
  delay?: number;
}

const Information = (props: InformationProps) => {
  const { delay = 0, children } = props;
  const infoRef = useObserver<HTMLDivElement>();

  return (
    <InformationStyle.Container ref={infoRef} $delay={delay}>
      <span>{children}</span>
    </InformationStyle.Container>
  );
};

export default Information;
