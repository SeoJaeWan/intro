import useObserver from '@/hooks/useObserver';
import AboutContentStyle from './aboutContent.style';
import WordSplit from '@/utils/wordSplit';

const firstEvent = WordSplit('두려움보다는 도전과 성장의 즐거움');

const secondEvent = WordSplit('끊임없이\u00A0발전하는\u00A0밑거름');

const AboutContent = () => {
  const contentRef = useObserver<HTMLParagraphElement>({ threshold: 1 });

  return (
    <AboutContentStyle.Container ref={contentRef}>
      개발자로서 서재완은 새로운 작업에서&nbsp;
      <span className={'first'}>
        {firstEvent.map((char, index) => (
          <AboutContentStyle.ColorSpan $delay={index * 0.1} key={index}>
            {char}
          </AboutContentStyle.ColorSpan>
        ))}
      </span>
      을 느낍니다. 작업을 통해 얻은 경험을 단순히 결과로 끝나는 것이
      아니라,&nbsp;
      <span className={'second'}>
        {secondEvent.map((char, index) => (
          <AboutContentStyle.RotateColorSpan
            $delay={(firstEvent.length - 1) * 0.1 + 1.5 + index * 0.1}
            key={index}
          >
            {char}
          </AboutContentStyle.RotateColorSpan>
        ))}
      </span>
      이라고 생각합니다.
    </AboutContentStyle.Container>
  );
};

export default AboutContent;
