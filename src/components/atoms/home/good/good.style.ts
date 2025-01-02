import styled, { keyframes } from 'styled-components';

const dropAni = keyframes`
    0% {
        transform: translateY(-150%);
        opacity: 0;
    }

    80% {
        transform: translateY(0%);
        opacity: 1;
    }

    100% {
        transform: translateY(-50%) rotate(8deg);
        opacity: 1;

    }
`;

const Good = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;

  font-size: 1vw;
  opacity: 0;
`;

const Container = styled.span`
  position: relative;

  display: inline-block;

  &.show {
    ${Good} {
      animation: ${dropAni} 0.6s ease-in-out forwards;
    }
  }
`;

const GoodStyle = {
  Container,
  Good,
};

export default GoodStyle;
