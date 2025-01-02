import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const leftIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const rightIn = keyframes`
  from {
    opacity: 0;
    transform: rotate(180deg) translateX(20px);
  }

  to {
    opacity: 1;
    transform: rotate(180deg) translateX(0);
  }
`;

interface ContainerProps {
  $delay: number;
}

const Container = styled.div<ContainerProps>`
  position: relative;

  padding: 15px 24px;

  span {
    opacity: 0;
  }

  &.show {
    span {
      animation: ${fadeIn} 2s forwards ${(props) => props.$delay}s;
    }

    &::before {
      animation: ${leftIn} 1.5s forwards ${(props) => props.$delay}s;
    }

    &::after {
      animation: ${rightIn} 1.5s forwards ${(props) => props.$delay}s;
    }
  }

  &::before,
  &::after {
    content: '';

    position: absolute;
    top: 0;

    display: block;

    width: 24px;
    height: 100%;

    opacity: 0;

    background-image: ${`url("/assets/images/home/brackets.svg")`};
    background-repeat: no-repeat;
    background-position: center;
  }

  &::before {
    left: 0;
    transform: translateX(20px);
  }

  &::after {
    right: 0;

    transform: rotate(180deg) translateX(20px);
  }
`;

const InformationStyle = {
  Container,
};

export default InformationStyle;
