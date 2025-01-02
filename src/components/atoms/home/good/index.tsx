import { PropsWithChildren } from 'react';
import GoodStyle from './good.style';
import Box from '../box';
import { BsFillHandThumbsUpFill } from 'react-icons/bs';
import useObserver from '@/hooks/useObserver';

const Good = (props: PropsWithChildren) => {
  const { children } = props;
  const goodRef = useObserver<HTMLSpanElement>({ threshold: 1 });

  return (
    <GoodStyle.Container ref={goodRef}>
      <GoodStyle.Good>
        <Box color={'box5'}>
          <BsFillHandThumbsUpFill />
        </Box>
      </GoodStyle.Good>
      {children}
    </GoodStyle.Container>
  );
};

export default Good;
