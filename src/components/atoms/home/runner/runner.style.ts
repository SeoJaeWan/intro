import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

const Container = styled.span`
  position: relative;

  display: inline-block;
`;

const runnerAni = keyframes`
  0% {
    left: 0;
  }

  95% {
    left: 100%;
    transform: perspective(5000px) translateY(-100%) rotateY(180deg) translateX(100%);
    
    opacity: 1;
  }
  100% {
    left: 100%;
    transform: perspective(5000px) translateY(-100%) rotateY(180deg) rotateX(90deg) translateX(100%);
  
    opacity: 0;
  }
`;

const Runner = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;

  transform: perspective(5000px) translateY(-100%) rotateY(180deg);
  transform-origin: bottom;

  width: 10vw;
  height: auto;

  aspect-ratio: 1146/1236;

  &.show {
    animation: ${runnerAni} 1.5s linear forwards;
  }
`;

const RunnerStyle = {
  Container,
  Runner,
};

export default RunnerStyle;
