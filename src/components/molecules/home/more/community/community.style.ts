import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: fit-content;
  height: 100%;
`;

const Content = styled.p`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  white-space: nowrap;
  font-size: 5.5vw;
  font-weight: 600;
`;

const mainBoxAni = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-200px);
    }

    70% {
        opacity: 1;
        transform: translateY(10px);
    }

    85% {
        transform: translateY(-2px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const MainBox = styled.span`
  position: relative;
  z-index: 1;

  margin-left: 25px;

  box-shadow:
    0 0 10px rgba(255, 110, 199, 0.8),
    0 0 20px rgba(255, 110, 199, 0.6),
    0 0 30px rgba(255, 110, 199, 0.4);
  border-radius: 10px;

  font-size: 3.5vw;

  opacity: 0;
  transform: translateY(-200px);

  &.show {
    animation: ${mainBoxAni} 0.4s ease-in-out forwards;
  }
`;

const SubBoxAni = keyframes`
    0% {
        transform: translate(-30%, -80%);
        opacity:0;
    }

    100% {
        transform: translate(-30%, -50%);
        opacity: 1;
    }
`;

const SubBox = styled.span`
  position: relative;
  z-index: 2;

  box-shadow:
    0 0 10px rgba(93, 158, 255, 0.8),
    0 0 20px rgba(93, 158, 255, 0.6),
    0 0 30px rgba(93, 158, 255, 0.4);
  border-radius: 10px;

  font-size: 2vw;

  transform: translate(-30%, -50%);
  opacity: 0;

  &.show {
    animation: ${SubBoxAni} 0.4s ease-in-out forwards;
  }
`;

const SecondaryBoxAni = keyframes`
    0% {
        transform: translate(-40%, -80px) rotate(110deg);
        opacity: 0;
    }

    80% {
        transform: translate(-40%, 0) rotate(-.5deg);
    }

    100% {
        transform: translate(-40%, 0) rotate(10deg);
        opacity: 1;
    }
`;

const SecondaryBox = styled.span`
  position: relative;
  z-index: 1;

  box-shadow:
    0 0 10px rgba(57, 255, 20, 0.8),
    0 0 20px rgba(57, 255, 20, 0.6),
    0 0 30px rgba(57, 255, 20, 0.4);
  border-radius: 10px;

  font-size: 3vw;

  transform: translate(-40%, -80px) rotate(110deg);
  opacity: 0;

  &.show {
    animation: ${SecondaryBoxAni} 0.6s ease-in-out forwards;
  }
`;

const CommunityStyle = {
  Container,
  Content,
  MainBox,
  SubBox,
  SecondaryBox,
};

export default CommunityStyle;
