import styled, { keyframes } from 'styled-components';

const imageAni = keyframes`
    0% {
        transform: scale(0);
    }

    80% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
`;

const ImageBox = styled.div`
  position: absolute;
  bottom: 120px;
  right: 200px;

  width: 30vw;
  height: 30vw;

  transform: scale(0);

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    display: none;
  }
`;

const showAni = keyframes`
    0% {
        transform: perspective(1000px) rotateX(-90deg);
    }

    80% {
        transform: perspective(1000px) rotateX(20deg);
    }

    100% {
        transform: perspective(1000px) rotateX(0deg);
    }
`;

const showMobileAni = keyframes`
  0% {
    transform: perspective(1000px) rotateX(-90deg) translateX(-40%);
  }

  80% {
    transform: perspective(1000px) rotateX(20deg) translateX(-40%);
  }

  100% {
    transform: perspective(1000px) rotateX(0deg) translateX(-40%);
  }
`;

const SubBox = styled.p`
  position: absolute;
  top: 250px;
  left: 100px;

  font-size: ${(props) => props.theme.font(40)};

  transform-origin: top;
  transform: perspective(1000px) rotateX(-90deg);

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    left: 50%;
    top: calc(8vh + max(3vw, 18px) + 10px);
    transform: perspective(1000px) rotateX(-90deg) translateX(-40%);
    white-space: nowrap;

    font-size: max(3vw, 18px);
  }
`;

const Container = styled.div`
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  width: 100vw;
  height: 100%;

  padding-bottom: 200px;

  &.show {
    ${SubBox} {
      animation: ${showAni} 0.8s ease-in-out forwards;
    }

    ${ImageBox} {
      animation: ${imageAni} 0.8s ease-in-out 0.2s forwards;
    }
  }

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    position: relative;
    justify-content: center;

    width: 100%;

    padding: 25vh 0 50px;

    &.show {
      ${SubBox} {
        animation: ${showMobileAni} 0.8s ease-in-out forwards;
      }
    }
  }
`;

const MainBox = styled.h3`
  position: absolute;
  z-index: 2;
  top: 200px;
  left: 0px;

  font-size: ${(props) => props.theme.font(30)};

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    left: 50%;
    top: 8vh;
    transform: translateX(-80%);
    white-space: nowrap;

    font-size: max(3vw, 16px);
  }
`;

const Content = styled.p`
  width: 100%;
  max-width: 38vw;

  font-size: ${(props) => props.theme.font(30)};
  line-height: 1.3;
  word-break: keep-all;

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    max-width: 100%;

    font-size: max(2.5vw, 20px);
    text-align: center;
  }
`;

const GrowthStyle = {
  Container,
  MainBox,
  SubBox,
  ImageBox,
  Content,
};

export default GrowthStyle;
