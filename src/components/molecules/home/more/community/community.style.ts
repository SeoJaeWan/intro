import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: fit-content;
  height: 100%;

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    width: 100%;

    padding: 25vh 0 50px;
  }
`;

const Content = styled.p`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  white-space: nowrap;
  font-size: 5.5vw;
  font-weight: 600;

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    display: none;
  }
`;

const MobileContent = styled.p`
  display: none;

  font-size: max(2.5vw, 20px);
  text-align: center;
  word-break: keep-all;

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    display: block;
  }
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

  display: inline-block;

  margin-left: 25px;

  box-shadow:
    0 0 10px rgba(255, 110, 199, 0.8),
    0 0 20px rgba(255, 110, 199, 0.6),
    0 0 30px rgba(255, 110, 199, 0.4);
  border-radius: 10px;

  font-size: 3.5vw;

  opacity: 0;
  transform: translateY(-200px);
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

  display: inline-block;

  box-shadow:
    0 0 10px rgba(93, 158, 255, 0.8),
    0 0 20px rgba(93, 158, 255, 0.6),
    0 0 30px rgba(93, 158, 255, 0.4);
  border-radius: 10px;

  font-size: 2vw;

  transform: translate(-30%, -50%);
  opacity: 0;
`;

const SecondaryBoxAni = keyframes`
    0% {
        transform: translate(-30%, -80px) rotate(110deg);
        opacity: 0;
    }

    80% {
        transform: translate(-30%, 0) rotate(-.5deg);
    }

    100% {
        transform: translate(-30%, 0) rotate(10deg);
        opacity: 1;
    }
`;

const SecondaryBox = styled.span`
  position: relative;
  z-index: 1;

  display: inline-block;

  box-shadow:
    0 0 10px rgba(57, 255, 20, 0.8),
    0 0 20px rgba(57, 255, 20, 0.6),
    0 0 30px rgba(57, 255, 20, 0.4);
  border-radius: 10px;

  font-size: 3vw;

  transform: translate(-40%, -80px) rotate(110deg);
  opacity: 0;
`;

const PopBox = styled.span`
  display: block;

  padding-bottom: 30px;

  &.show {
    ${MainBox} {
      animation: ${mainBoxAni} 0.4s ease-in-out forwards;
    }

    ${SubBox} {
      animation: ${SubBoxAni} 0.4s ease-in-out forwards;
    }

    ${SecondaryBox} {
      animation: ${SecondaryBoxAni} 0.6s ease-in-out forwards;
    }
  }
`;

const handAni = keyframes`
  from {
    transform: rotate(0deg) scale(1);
  }

  to {
    transform: rotate(30deg) scale(.9);
  }
`;

const handMobileAni = keyframes`
  from {
    transform: rotate(0deg) scale(1) translateX(-50%);
  }

  to {
    transform: rotate(30deg) scale(.9) translateX(-50%);
  }
`;

const HandImage = styled(Image)`
  position: absolute;

  top: 70%;
  left: 10%;

  width: 100px;
  height: 100px;

  animation: ${handAni} 2s linear infinite alternate;
  opacity: 0;
  transition: opacity 0.5s;

  &.show {
    opacity: 1;
  }

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    top: 8vh;
    left: 50%;
    transform: translateX(-55%);

    width: 85px;
    height: 85px;

    animation: ${handMobileAni} 2s linear infinite alternate;
  }
`;

const CommunityStyle = {
  Container,
  Content,
  MobileContent,
  MainBox,
  SubBox,
  SecondaryBox,
  PopBox,
  HandImage,
};

export default CommunityStyle;
