import styled, { keyframes } from 'styled-components';

const textColor = (text: string, backgroundText: string) => keyframes`
 0% {
    color: ${text};
 }

 25% {
    color: ${backgroundText};
 }

 75% {
    color: ${backgroundText};
 }

 100% {
    color: ${text};
 }
`;

const rotateColor = (text: string, backgroundText: string) => keyframes`
    0% {
        color: ${text};
        transform: perspective(100px) rotateX(0deg);
    }
    
    25% {
        color: ${backgroundText};
    }
    
    75% {
        color: ${backgroundText};
    }
    
    100% {
        color: ${text};
        transform: perspective(100px) rotateX(360deg);
    }
`;

interface ColorSpanProps {
  $delay: number;
}

const ColorSpan = styled.span<ColorSpanProps>`
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-delay: ${(props) => props.$delay}s;
`;

const RotateColorSpan = styled(ColorSpan)`
  display: inline-block;
  animation-duration: 1s;
`;

const Container = styled.p`
  font-size: 4.5vw;
  line-height: 1.5;

  &.show {
    ${ColorSpan} {
      animation-name: ${(props) =>
        textColor(props.theme.color.text, props.theme.color.backgroundText)};
    }

    ${RotateColorSpan} {
      animation-name: ${(props) =>
        rotateColor(props.theme.color.text, props.theme.color.backgroundText)};
    }
  }
`;

const AboutContentStyle = {
  Container,
  ColorSpan,
  RotateColorSpan,
};

export default AboutContentStyle;
