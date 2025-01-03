import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  overflow: hidden;

  width: 100vw;
  height: 100vh;
`;

const ImageBox = styled.div`
  position: relative;

  width: 100%;
  height: 70%;

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    height: 80%;
  }
`;

const ani = keyframes`
  0% {
    transform: translate(-50%, 0);
  }

  50% {
    transform: translate(-50%, -10%);
  }

  100% {
    transform: translate(-50%, 0);
  }
`;

const FirstTextImage = styled(Image)`
  position: absolute;
  top: 30%;
  left: 20%;
  transform: translate(-50%, 0);

  width: 29vh;
  height: auto;

  animation: ${ani} 4s ease-in infinite alternate;

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    width: 15vh;
  }
`;

const LastTextImage = styled(Image)`
  position: absolute;
  top: 20%;
  left: 80%;
  transform: translate(-50%, 0);

  width: 30vh;
  height: auto;

  animation: ${ani} 5s linear infinite alternate;

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    width: 16vh;
  }
`;

const EarthImage = styled(Image)`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, 0);

  width: 55vh;
  height: auto;

  aspect-ratio: 1/1;

  animation: ${ani} 6s ease-in-out infinite alternate;
  @media (max-width: ${(props) => props.theme.media.mobile}) {
    top: 45%;

    width: 35vh;
  }
`;

const Title = styled.h1`
  margin-top: 0px;

  font-size: ${(props) => `max(2vw, ${props.theme.font(18)})`};
  letter-spacing: 5px;
`;

const NotFoundStyle = {
  Container,
  ImageBox,
  FirstTextImage,
  LastTextImage,
  EarthImage,
  Title,
};

export default NotFoundStyle;
