'use client';
import { Fragment, useEffect, useRef, useState } from 'react';
import TitleStyle from './title.style';

const PercentText = ['p', 'd', 'a'];

const Title = () => {
  const [percent, setPercent] = useState(0);
  const spinRef = useRef<HTMLSpanElement>(null);

  const handleSpinAnimationEnd = () => {
    const spanElement = spinRef.current;

    if (!spanElement) return;
    spanElement.classList.toggle('alternate');
  };

  const percentText = percent.toString().padStart(3, '0').split('');

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

    return () => {
      clearTimeout(interval);
    };
  }, []);

  return (
    <TitleStyle.Container>
      <TitleStyle.Title>
        <TitleStyle.Line>
          <TitleStyle.Rotate $percent={percent}>N</TitleStyle.Rotate>
          <TitleStyle.FadeIn $percent={percent}>e</TitleStyle.FadeIn>
          <TitleStyle.Rotate3D $percent={percent}>v</TitleStyle.Rotate3D>
          <TitleStyle.FadeDown $percent={percent}>e</TitleStyle.FadeDown>
          <TitleStyle.FadeScrew $percent={percent} $delay={0.6}>
            r
          </TitleStyle.FadeScrew>
          &nbsp;
          <TitleStyle.RotateCircle $percent={percent}>
            <span>e</span>
          </TitleStyle.RotateCircle>
          <TitleStyle.TextRotate $percent={percent}>
            <span>i</span>
            <span>n</span>
          </TitleStyle.TextRotate>
          <TitleStyle.Bounce $percent={percent} $delay={0.9}>
            <span data-text={'e'}>d</span>
          </TitleStyle.Bounce>
          <TitleStyle.FadeIn $percent={percent}>,</TitleStyle.FadeIn>
        </TitleStyle.Line>
        <TitleStyle.Line>
          E
          <TitleStyle.Bounce $percent={percent} $delay={0.5}>
            <span data-text={'v'}>v</span>
          </TitleStyle.Bounce>
          <TitleStyle.Bounce $percent={percent} $delay={0.8}>
            <span data-text={'e'}>e</span>
          </TitleStyle.Bounce>
          <TitleStyle.FadeScrew $percent={percent} $delay={0.3}>
            r
          </TitleStyle.FadeScrew>
          &nbsp;
          <TitleStyle.Lightning $percent={percent}>
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
          </TitleStyle.Lightning>
          {percentText.map((char, idx) => (
            <TitleStyle.Count key={idx}>
              {percent !== 100 ? (
                <Fragment key={idx}>{char}</Fragment>
              ) : (
                <TitleStyle.Bounce
                  key={idx}
                  $delay={idx * 0.2}
                  $percent={percent}
                >
                  <span data-text={char}>{PercentText[idx]}</span>
                </TitleStyle.Bounce>
              )}
            </TitleStyle.Count>
          ))}
          <TitleStyle.Spin $percent={percent}>
            <span ref={spinRef} onAnimationEnd={handleSpinAnimationEnd}>
              t
            </span>
          </TitleStyle.Spin>
          <TitleStyle.FadeLeft $percent={percent}>e</TitleStyle.FadeLeft>
        </TitleStyle.Line>
      </TitleStyle.Title>
    </TitleStyle.Container>
  );
};

export default Title;
