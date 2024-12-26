import styled, { keyframes } from 'styled-components';

const Container = styled.main`
  width: 100%;
  height: 100%;
  min-height: 200vh;

  background-color: ${(props) => props.theme.color.background};
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
  Star,
};

export default LayoutStyle;
