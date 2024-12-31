import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(80px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const zigzagUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(50px);
    }

    80% {
        transform: translateY(-20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const zigzagDown = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-50px);
    }

    80% {
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const zoomOut = keyframes`
    from {
        opacity: 0;
        transform: scale(15);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
`;

const animation = {
  fadeUp,
  zigzagUp,
  zigzagDown,
  zoomOut,
};

export type Animation = keyof typeof animation;

interface ContainerProps {
  $animation: Animation;
}

const Container = styled.span<ContainerProps>`
  position: relative;

  display: inline-block;
  opacity: 0;

  &.show {
    animation: ${(props) => animation[props.$animation]} 0.5s 0.2s ease-in-out
      forwards;
  }
`;

const ShowCharStyle = {
  Container,
};

export default ShowCharStyle;
