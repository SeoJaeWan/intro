import Box from '@/components/atoms/home/box';
import GrowthStyle from './growth.style';
import useObserver from '@/hooks/useObserver';
import Image from 'next/image';

const Growth = () => {
  const boxRef = useObserver<HTMLDivElement>({ threshold: 0.5 });

  return (
    <GrowthStyle.Container ref={boxRef}>
      <GrowthStyle.MainBox>
        <Box color={'box1'}>Never End, Ever Update</Box>
      </GrowthStyle.MainBox>
      <GrowthStyle.SubBox>
        <Box color={'box2'}>That&apos;s Me, Experience Lover</Box>
      </GrowthStyle.SubBox>

      <GrowthStyle.Content>
        낯선 기능에 설렘을 가지며 React와 Next.js 환경에서 즐거운 개발을 하고
        있습니다. <br />
        보다 나은 개발 환경을 만들기 위해 즐거운 고민을 하고 있습니다.{' '}
      </GrowthStyle.Content>

      <GrowthStyle.ImageBox>
        <Image
          src="/assets/images/common/env.png"
          alt=""
          width={600}
          height={600}
        />
      </GrowthStyle.ImageBox>
    </GrowthStyle.Container>
  );
};

export default Growth;
