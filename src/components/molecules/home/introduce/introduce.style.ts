import Section from '@/components/atoms/common/section/section.style';
import { ColorType } from '@/style/theme';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

const Container = styled(Section)``;

const Article = styled.article`
  position: relative;

  display: flex;
  gap: 10px;

  padding: 20px 0;

  &::after {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);

    content: '';
    display: block;

    width: 100%;
    height: 0.5px;

    background-color: ${(props) => props.theme.color.line};
    opacity: 0.3;
  }
`;

const hovingAni = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px); /* 위로 이동 */
  }
  100% {
    transform: translateY(0);
  }`;

interface HovingImageProps {
  $delay: number;
}

const HovingImage = styled(Image)<HovingImageProps>`
  animation: ${hovingAni} 5s ${(props) => props.$delay}s ease-in-out infinite;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 70%;

  padding: 50px 0;
`;

interface TitleProps {
  $color: keyof ColorType;
}

const Title = styled.h3<TitleProps>`
  font-size: ${(props) => props.theme.font(36)};
  font-weight: 700;

  color: ${(props) => props.theme.color[props.$color]};
`;

const Content = styled.p`
  font-size: ${(props) => props.theme.font(38)};
  font-weight: 500;
  line-height: 1.3;
  word-break: keep-all;
`;

const IntroduceStyle = {
  Container,
  Article,
  HovingImage,
  ContentBox,
  Title,
  Content,
};

export default IntroduceStyle;
