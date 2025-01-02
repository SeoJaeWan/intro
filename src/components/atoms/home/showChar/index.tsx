import { PropsWithChildren } from 'react';
import ShowCharStyle, { Animation } from './showChar.style';
import useObserver from '@/hooks/useObserver';

interface ShowCharProps extends PropsWithChildren {
  animation: Animation;
}

const ShowChar = (props: ShowCharProps) => {
  const { animation, children } = props;
  const charRef = useObserver<HTMLSpanElement>({ threshold: 1 });

  return (
    <ShowCharStyle.Container $animation={animation} ref={charRef}>
      {children}
    </ShowCharStyle.Container>
  );
};

export default ShowChar;
