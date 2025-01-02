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

  100% {
    left: 100%;
    transform: perspective(5000px) translateY(50%) rotateY(180deg) translateX(100%);
  }
`;

const Runner = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;

  transform: perspective(5000px) translateY(50%) rotateY(180deg);
  transform-origin: bottom;

  width: 10vw;
  height: auto;

  aspect-ratio: 1146/1236;

  &.show {
    animation: ${runnerAni} 1s linear forwards;
  }
`;

const stampAni = keyframes`
  0% {
    transform: perspective(100px) translateY(55%) scale(5);
    opacity: unset;
  }

  100% {
    transform: perspective(100px) translateY(55%) scale(1);
    opacity: 1;
  }
`;

const Cancel = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;

  display: inline-block;

  width: 10vw;
  height: 10vw;

  opacity: 0;

  &.show {
    animation: ${stampAni} 0.2s linear forwards;
  }
`;

const RunnerStyle = {
  Container,
  Runner,
  Cancel,
};

export default RunnerStyle;
