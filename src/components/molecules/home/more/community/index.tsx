import WordSplit from '@/utils/wordSplit';
import CommunityStyle from './community.style';
import ShowChar from '@/components/atoms/home/showChar';
import Box from '@/components/atoms/home/box';
import useObserver from '@/hooks/useObserver';
import Runner from '@/components/atoms/home/runner';
import Rising from '@/components/atoms/home/rising';
import Good from '@/components/atoms/home/good';

const content1 = ['좋은\u00A0'];

const content2 = ['서비스를\u00A0'];

const content3 = WordSplit(`완성하기 위해서는 팀원과의 `);

const content4 = WordSplit(`이 중요하다고 생각해요. `);

const content5 = WordSplit('혼자 앞서나가는 것이 아닌 ');

const content6 = WordSplit('전체의 ');

const content7 = WordSplit('전투력');

const content8 = WordSplit(' 상승에 관심이 많습니다.');

const mobileContent =
  '좋은 서비스를 완성하기 위해서는 팀원과의 소통이 중요하다고 생각해요. 혼자 앞서나가는 것이 아닌 전체의 전투력 상승에 관심이 많습니다.';

const Community = () => {
  const box1Ref = useObserver<HTMLDivElement>({ threshold: 1 });
  const box2Ref = useObserver<HTMLDivElement>({ threshold: 1 });
  const box3Ref = useObserver<HTMLDivElement>({ threshold: 1 });

  const handRef = useObserver<HTMLImageElement>({ threshold: 1 });

  return (
    <CommunityStyle.Container>
      <h3 className={'a11y'}>Communication</h3>

      <p className={'a11y'}>{mobileContent}</p>

      <CommunityStyle.MobileContent aria-label="hidden">
        {mobileContent}
      </CommunityStyle.MobileContent>

      <CommunityStyle.Content aria-label="hidden">
        <Good>
          {content1.map((char, index) => (
            <ShowChar animation={'fadeUp'} key={index}>
              {char}
            </ShowChar>
          ))}
        </Good>

        {content2.map((char, index) => (
          <ShowChar animation={'fadeUp'} key={index}>
            {char}
          </ShowChar>
        ))}
        {content3.map((char, index) => (
          <ShowChar
            animation={index % 2 === 0 ? 'zigzagUp' : 'zigzagDown'}
            key={index}
          >
            {char}
          </ShowChar>
        ))}
        <CommunityStyle.MainBox ref={box1Ref}>
          <Box color={'box3'}>&nbsp;소통&nbsp;</Box>
        </CommunityStyle.MainBox>
        <CommunityStyle.SubBox ref={box2Ref}>
          <Box color={'box4'}>과</Box>
        </CommunityStyle.SubBox>
        <CommunityStyle.SecondaryBox ref={box3Ref}>
          <Box color={'box5'}>&nbsp;협업&nbsp;</Box>
        </CommunityStyle.SecondaryBox>

        {content4.map((char, index) => (
          <ShowChar
            animation={index % 2 === 0 ? 'zigzagUp' : 'zigzagDown'}
            key={index}
          >
            {char}
          </ShowChar>
        ))}

        <Runner>
          {content5.map((char, index) => (
            <ShowChar
              animation={index % 2 === 0 ? 'zigzagUp' : 'zigzagDown'}
              key={index}
            >
              {char}
            </ShowChar>
          ))}
        </Runner>

        {content6.map((char, index) => (
          <ShowChar
            animation={index % 2 === 0 ? 'zigzagUp' : 'zigzagDown'}
            key={index}
          >
            {char}
          </ShowChar>
        ))}

        <Rising>
          {content7.map((char, index) => (
            <ShowChar animation={'zoomOut'} key={index}>
              {char}
            </ShowChar>
          ))}
        </Rising>

        {content8.map((char, index) => (
          <ShowChar
            animation={index % 2 === 0 ? 'zigzagUp' : 'zigzagDown'}
            key={index}
          >
            {char}
          </ShowChar>
        ))}
      </CommunityStyle.Content>

      <CommunityStyle.HandImage
        src={'/assets/images/common/hands.svg'}
        alt={''}
        width={100}
        height={100}
        ref={handRef}
      />
    </CommunityStyle.Container>
  );
};

export default Community;
