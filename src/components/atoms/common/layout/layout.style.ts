import styled, { keyframes } from 'styled-components';

const Container = styled.main`
  width: 100%;
  height: 100%;

  background-color: ${(props) => props.theme.color.background};
`;

const headerShow = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  width: 100%;

  padding: 10px 40px 5px;
  background-color: ${(props) => props.theme.color.background};

  opacity: 0;

  animation: ${headerShow} 1s 2s forwards;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) scaleY(0.5);

    display: block;

    width: calc(100% - 80px);
    height: 1px;

    background-color: ${(props) => props.theme.color.line};
  }
`;

const Logo = styled.h1`
  img {
    width: 90px;
    height: auto;

    aspect-ratio: 526 / 300;
  }
`;

const starAni = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0.2;
    }
`;

interface StarProps {
  $top: string;
  $left: string;
  $delay: number;
}

const Star = styled.div<StarProps>`
  position: fixed;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};

  width: 3px;
  height: 3px;

  border-radius: 50%;

  background-color: ${(props) => props.theme.color.star};
  opacity: 0;
  box-shadow:
    0 0 3px ${(props) => props.theme.color.star},
    0 0 5px ${(props) => props.theme.color.star},
    0 0 7px ${(props) => props.theme.color.star};

  animation: ${starAni} 2s alternate ${(props) => props.$delay}s infinite;
`;

const LayoutStyle = {
  Container,
  Header,
  Logo,
  Star,
};

export default LayoutStyle;
