import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.span`
  position: relative;

  display: inline-block;
`;

const Runner = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;

  transition: all 0.5s;
  transform-origin: bottom;

  width: 10vw;
  height: auto;

  aspect-ratio: 1146/1236;

  &.active {
    position: fixed;
    top: initial;
    left: 0;
  }
`;

const RunnerStyle = {
  Container,
  Runner,
};

export default RunnerStyle;
