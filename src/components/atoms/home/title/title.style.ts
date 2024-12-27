import styled, { css, keyframes } from 'styled-components';

interface AnimationProps {
  $percent: number;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 0 20px;

  font-size: ${(props) => `calc(14vw + ${props.theme.font(16)})`};
  letter-spacing: -2px;
  font-weight: 500;

  & * {
    line-height: 0.95;
  }

  & > span {
    align-self: flex-start;
    margin-left: -15px;
  }

  & > span:last-child {
    align-self: flex-end;
  }

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    font-size: ${(props) => `calc(12vw + ${props.theme.font(16)})`};
  }
`;

const spinChar = keyframes`
    0% {
        transform: rotateX(900deg) perspective(100px);
    }
    
    25% {
        transform: rotateX(900deg) perspective(100px);  
    }
    
    75% {
        transform: rotate(0deg) perspective(100px);
    }

    100% {
        transform: rotate(0deg) perspective(100px);
    }
`;

const alternateSpinChar = keyframes`
    0% {
        transform: rotate(0deg) perspective(100px);
    }
    
    25% {
        transform: rotate(0deg) perspective(100px);
    }
    
    75% {
        transform: rotateX(900deg) perspective(100px);
    }
    
    100% {
        transform: rotateX(900deg) perspective(100px);  
    }
`;

const Line = styled.span`
  position: relative;

  display: inline-flex;
  align-items: flex-end;
`;

interface SpinProps {
  $percent: number;
}

const Spin = styled.span<SpinProps>`
  display: inline-block;

  span {
    margin-left: -8%;
    display: inline-block;

    visibility: ${(props) => (props.$percent === 100 ? 'visible' : 'hidden')};

    transform: rotateX(900deg) perspective(100px);
    animation: ${spinChar} 3.5s cubic-bezier(0.2, 0.98, 1, 1) forwards;
  }

  span.alternate {
    transform: rotate(0deg) perspective(100px);
    animation: ${alternateSpinChar} 3.5s cubic-bezier(0.2, 0.98, 1, 1) 2s
      forwards;
  }

  &::before {
    content: '%';

    position: absolute;

    opacity: ${(props) => (props.$percent !== 100 ? 1 : 0)};
    transition: opacity 0.5s;
  }
`;

const BounceAni = keyframes`
  0% {
    transform: translateY(50%);
    opacity: 0;
  }

  30% {
    transform: translateY(-60%);
    opacity: 1;
  }

  60% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

interface BounceProps extends AnimationProps {
  $delay: number;
}

const Bounce = styled.span<BounceProps>`
  position: relative;
  display: inline-block;

  overflow: hidden;

  span {
    display: inline-block;
    opacity: 0;

    ${(props) =>
      props.$percent === 100 &&
      css`
        animation: ${BounceAni} 2s cubic-bezier(0.42, 0, 0.02, 0.99)
          ${props.$delay}s forwards;
      `}
  }

  span::before {
    content: attr(data-text);

    position: absolute;
    bottom: calc(100%);
    left: 50%;
    transform: translateX(-50%);

    display: block;
  }
`;

const LightningLine = keyframes`
  from {
    stroke-dashoffset: 100;
  }

  to {
    stroke-dashoffset: 0;
  }
`;

const LightningSize = keyframes`
  0% {
    transform:  translate(-50%, -50%) scale(1);
  }

  40% {
    transform:  translate(-50%, -50%) scale(.6);
  }

  60% {
    transform:  translate(-50%, -50%) scale(.7);
  }

  100% {
    transform:  translate(-50%, -50%) scale(0);
  }
`;

const TextSize = keyframes`
  0% {
    transform: scale(0);
  }

  40% {
    transform: scale(.7);
  }

  60% {
    transform: scale(.6);
  }

  100% {
    transform: scale(1);
  }
`;

const Count = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: flex-end;
  letter-spacing: 1px;

  width: 8.75vw;
`;

interface LightningProps {
  $percent: number;
}

const Lightning = styled.span<LightningProps>`
  position: relative;

  display: inline-block;

  span {
    display: inline-block;

    transform: scale(0);
    ${(props) =>
      props.$percent === 100 &&
      css`
        animation: ${TextSize} 1s cubic-bezier(0.42, 0, 0.02, 0.99) 1s forwards;
      `}
  }

  .mask {
    fill: #fff;

    width: 100%;
    height: ${(props) => `${props.$percent}%`};

    transform: rotateX(180deg) translateY(-100%);
  }

  .line {
    fill: none;
    stroke: #fff100;
    stroke-linejoin: round;
    stroke-width: 5px;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;

    animation: ${LightningLine} 1s cubic-bezier(0.42, 0, 0.02, 0.99) 2s forwards;
  }

  .fill {
    fill: #fff100;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: auto;
    height: 100%;

    aspect-ratio: 51/108;

    ${(props) =>
      props.$percent === 100 &&
      css`
        animation: ${LightningSize} 1s cubic-bezier(0.42, 0, 0.02, 0.99)
          forwards;
      `}
  }
`;

const RotateAni = keyframes`
  0% {
    transform: rotate(-180deg) translate(200%, -20%);
  }

  50% {
    transform: rotate(-90deg) translate(-50%, -50%);
  }

  100% {
    transform: rotate(0deg)  translate(0%);

  }
`;

const Rotate = styled.span<AnimationProps>`
  display: inline-block;

  transform: rotate(-180deg) translate(200%, -20%);
  ${(props) =>
    props.$percent === 100 &&
    css`
      animation: ${RotateAni} 1.5s cubic-bezier(0.42, 0, 0.02, 0.99) 0.1s
        forwards;
    `};
`;

const FadeInAni = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const FadeIn = styled.span<AnimationProps>`
  display: inline-block;

  opacity: 0;
  ${(props) =>
    props.$percent === 100 &&
    css`
      animation: ${FadeInAni} 2s cubic-bezier(0.42, 0, 0.02, 0.99) 0.5s forwards;
    `}
`;

const Rotate3DAni = keyframes`
  from {
    opacity: 0;
    transform: perspective(200px) rotateX(-220deg);
  }

  to {
    opacity: 1;
    transform: perspective(200px) rotateX(0deg);
  }
`;

const Rotate3D = styled.span<AnimationProps>`
  display: inline-block;

  transform: perspective(200px) rotateX(-220deg);
  transform-origin: bottom;
  opacity: 0;

  ${(props) =>
    props.$percent === 100 &&
    css`
      animation: ${Rotate3DAni} 1.5s cubic-bezier(0.42, 0, 0.02, 0.99) 0.3s
        forwards;
    `}
`;

const FadeDownAni = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const FadeDown = styled.span<AnimationProps>`
  display: inline-block;

  opacity: 0;
  transform: translateY(-50%);

  ${(props) =>
    props.$percent === 100 &&
    css`
      animation: ${FadeDownAni} 1.5s cubic-bezier(0.87, -0.01, 0, 1.93) 0.5s
        forwards;
    `}
`;

const RotateCircleAni = keyframes`
  0% {
    transform: rotate(-1440deg);
    opacity: 0;
  }

  100% {
    transform: rotate(0);
    opacity: 1;
  }
`;

const RotateCircleHiddenAni = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%,-100%);
  }
  
  20% {
    transform:translate(-50%, -50%) rotate(0deg);
    opacity: 1;
  }

  100% {
    transform:translate(-50%, -50%) rotate(1440deg);
    opacity: 0;
  }
`;

const RotateCircle = styled.span<AnimationProps>`
  display: inline-block;
  position: relative;

  span {
    display: inline-block;

    transform: rotate(1440deg);
    transform-origin: 50% 60%;
    opacity: 0;
    ${(props) =>
      props.$percent === 100 &&
      css`
        animation: ${RotateCircleAni} 2s cubic-bezier(0.42, 0, 0.02, 0.99) 1.1s
          forwards;
      `}
  }

  &::before {
    content: 'o';

    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -100%);
    transform-origin: 50% 60%;

    ${(props) =>
      props.$percent === 100 &&
      css`
        animation: ${RotateCircleHiddenAni} 2s cubic-bezier(0.42, 0, 0.02, 0.99)
          0.5s;
      `}
  }
`;

const TextRotateAni = keyframes`
  from {
    transform: perspective(200px) rotateY(0deg);
  }

  to {
    transform: perspective(200px) rotateY(-180deg);
  }
`;

const TextRotateCharAni = keyframes`
  0% {
    transform: perspective(200px) translate(-50%, 0%);
    opacity: 0;
  }

  30% {
    transform: perspective(200px) translate(-50%, -50%);
    opacity: 1;
  }

  100% {
    transform: perspective(200px) translate(24%, -50%);
    opacity: 1;
  }
`;

const TextRotate = styled.span<AnimationProps>`
  position: relative;

  display: inline-block;

  transform-style: preserve-3d;
  transform: perspective(200px) rotateY(0deg);
  ${(props) =>
    props.$percent === 100 &&
    css`
      animation: ${TextRotateAni} 1.5s cubic-bezier(0.42, 0, 0.02, 0.99) 1.6s
        forwards;
    `}

  span {
    display: inline-block;
    backface-visibility: hidden;
  }

  span:first-child {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;

    transform: perspective(200px) translate(-50%, 0%);
    opacity: 0;

    ${(props) =>
      props.$percent === 100 &&
      css`
        animation: ${TextRotateCharAni} 1.5s cubic-bezier(0.42, 0, 0.02, 0.99)
          0.1s forwards;
      `}
  }

  span:last-child {
    position: relative;
    z-index: 2;
    transform: rotateY(-180deg);
    /* backface-visibility: visible; */
  }
`;

const FadeLeftAni = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50%);
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const FadeLeft = styled.span<AnimationProps>`
  display: inline-block;

  margin-left: -1%;

  opacity: 0;
  transform: translateX(50%);
  ${(props) =>
    props.$percent === 100 &&
    css`
      animation: ${FadeLeftAni} 1.5s cubic-bezier(0.87, -0.01, 0, 1.93) 0.5s
        forwards;
    `}
`;

const FadeScrewAni = keyframes`
  0% {
    opacity: 0;
    transform: perspective(100px) scale(0) rotateY(480deg);
  }

  100% {
    opacity: 1;
    transform:  perspective(100px) scale(1) rotateY(0deg);
  }

`;

interface FadeScrewProps extends AnimationProps {
  $delay: number;
}

const FadeScrew = styled.span<FadeScrewProps>`
  display: inline-block;

  opacity: 0;
  transform: perspective(100px) scale(0) rotateY(480deg);
  transform-origin: center;

  ${(props) =>
    props.$percent === 100 &&
    css`
      animation: ${FadeScrewAni} 1.5s ease-in-out ${props.$delay}s forwards;
    `};
`;

const TitleStyle = {
  Container,
  Title,
  Line,
  Spin,
  Bounce,
  Count,
  Lightning,
  Rotate,
  FadeIn,
  Rotate3D,
  FadeDown,
  RotateCircle,
  TextRotate,
  FadeLeft,
  FadeScrew,
};

export default TitleStyle;
