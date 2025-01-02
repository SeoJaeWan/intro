'use client';
import {
  Fragment,
  useEffect,
  // useRef,
  useState,
} from 'react';
import HeroTitleStyle from './heroTitle.style';

const PercentText = ['p', 'd', 'a'];

const HeroTitle = () => {
  const [percent, setPercent] = useState(0);
  const [isAnimationEnd, setIsAnimationEnd] = useState(false);

  const percentText = percent.toString().padStart(3, '0').split('');

  const handleFreeFixed = () => {
    const htmlEl = document.querySelector('html');

    htmlEl?.classList.remove('fixed');
    setIsAnimationEnd(true);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      const step = () => {
        setPercent((prevPercent) => {
          const update = prevPercent + 1;

          if (update < 100) {
            window.requestAnimationFrame(step);
          }

          return update;
        });
      };
      window.requestAnimationFrame(step);
    }, 3000);

    const htmlEl = document.querySelector('html');

    htmlEl?.classList.add('fixed');

    return () => {
      clearTimeout(interval);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsAnimationEnd(false);
      }
    };

    if (isAnimationEnd) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAnimationEnd]);

  return (
    <HeroTitleStyle.Container>
      <h2 className="a11y">Naver End, Ever Update</h2>
      <HeroTitleStyle.Title aria-hidden="true">
        <HeroTitleStyle.Line>
          <HeroTitleStyle.FadeIn $percent={percent} $delay={0.1}>
            N
          </HeroTitleStyle.FadeIn>
          <HeroTitleStyle.FadeIn
            $percent={percent}
            $delay={1}
            onAnimationEnd={handleFreeFixed}
          >
            e
          </HeroTitleStyle.FadeIn>
          <HeroTitleStyle.FadeIn $percent={percent} $delay={0.4}>
            v
          </HeroTitleStyle.FadeIn>
          <HeroTitleStyle.FadeIn $percent={percent} $delay={0.2}>
            e
          </HeroTitleStyle.FadeIn>
          <HeroTitleStyle.FadeIn $percent={percent} $delay={0.4}>
            r
          </HeroTitleStyle.FadeIn>
          <HeroTitleStyle.Temp>&nbsp;</HeroTitleStyle.Temp>
          <HeroTitleStyle.FadeIn $percent={percent} $delay={0.5}>
            e
          </HeroTitleStyle.FadeIn>
          <HeroTitleStyle.FadeIn $percent={percent} $delay={0.9}>
            n
          </HeroTitleStyle.FadeIn>
          <HeroTitleStyle.FadeIn $percent={percent} $delay={0.7}>
            d
          </HeroTitleStyle.FadeIn>
          <HeroTitleStyle.FadeIn $percent={percent} $delay={0.2}>
            ,
          </HeroTitleStyle.FadeIn>
        </HeroTitleStyle.Line>
        <HeroTitleStyle.Line>
          E
          <HeroTitleStyle.FadeIn $percent={percent} $delay={0.5}>
            v
          </HeroTitleStyle.FadeIn>
          <HeroTitleStyle.FadeIn $percent={percent} $delay={0.7}>
            e
          </HeroTitleStyle.FadeIn>
          <HeroTitleStyle.FadeIn $percent={percent} $delay={0.3}>
            r
          </HeroTitleStyle.FadeIn>
          <HeroTitleStyle.Temp>&nbsp;</HeroTitleStyle.Temp>
          <HeroTitleStyle.Lightning $percent={percent}>
            <span>u</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.04 342.54">
              <defs>
                <mask id="mask">
                  <rect className="mask" width="162.04" height="342.54" />
                </mask>
              </defs>
              <path
                className="line"
                d="M136.37 15.06 L65.04 15.06 L9.04 201.06 L55.86 201.06 L22.87 332.46 L154.7 131.54 L103.67 131.54 L136.37 15.06 Z"
                pathLength={100}
              />

              <g mask={'url(#mask)'}>
                <polygon
                  className="fill"
                  points="136.37 15.06 65.04 15.06 9.04 201.06 55.86 201.06 22.87 332.46 154.7 131.54 103.67 131.54 136.37 15.06"
                />
              </g>
            </svg>
          </HeroTitleStyle.Lightning>
          {percentText.map((char, idx) => (
            <HeroTitleStyle.Count key={idx}>
              {percent !== 100 ? (
                <Fragment key={idx}>{char}</Fragment>
              ) : (
                <HeroTitleStyle.FadeIn
                  key={idx}
                  $delay={idx * 0.2}
                  $percent={percent}
                >
                  {PercentText[idx]}
                </HeroTitleStyle.FadeIn>
              )}
            </HeroTitleStyle.Count>
          ))}
          <HeroTitleStyle.FadeIn $percent={percent} $delay={0.3}>
            t
          </HeroTitleStyle.FadeIn>
          <HeroTitleStyle.FadeIn $percent={percent} $delay={0.6}>
            e
          </HeroTitleStyle.FadeIn>
        </HeroTitleStyle.Line>
      </HeroTitleStyle.Title>

      <HeroTitleStyle.ScrollAble $isAnimationEnd={isAnimationEnd} />
    </HeroTitleStyle.Container>
  );
};

export default HeroTitle;
