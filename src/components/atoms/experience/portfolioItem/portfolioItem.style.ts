import styled, { css, keyframes } from 'styled-components';

const Title = styled.span`
  font-size: ${(props) => `max(2vw, ${props.theme.font(30)})`};
  font-weight: 600;
`;

const Category = styled.span`
  font-size: ${(props) => `max(1.2vw, ${props.theme.font(20)})`};
`;

const Member = styled.span`
  font-size: ${(props) => `max(1vw, ${props.theme.font(16)})`};
`;

const ActionLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  font-size: ${(props) => `max(1vw, ${props.theme.font(20)})`};
`;

const showDescription = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Description = styled.div`
  flex: 1;
  width: 100%;

  margin-top: 20px;

  font-size: ${(props) => `max(1vw, ${props.theme.font(20)})`};
  word-break: break-all;

  overflow: auto;

  line-height: 1.5;

  opacity: 0;
  animation: ${showDescription} 1s 1.5s forwards;

  ul {
    margin-top: 15px;
    list-style: disc inside;
  }

  a {
    font-weight: 900;
  }

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    display: none;

    font-size: ${(props) => `max(1vw, ${props.theme.font(16)})`};
  }
`;

const PreviewDetails = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  transform: translate(-50%, -50%);

  color: ${(props) => props.theme.color.text};

  background-color: ${(props) => props.theme.color.backgroundShadow};

  opacity: 0;
  transition: all 0.4s;
`;

const showDetail = keyframes`
  from {
    flex: 1;
    opacity: 0;
  }
  
  to {
    flex: 1;
    opacity: 1;
  }
`;

const Detail = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  width: 0;
  height: 0;

  color: ${(props) => props.theme.color.text};

  opacity: 0;
  overflow: hidden;

  &.open {
    height: 100%;
    animation: ${showDetail} 2s forwards;
  }

  ${Description} {
    display: none;
  }

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    gap: 10px;

    padding-top: 0;

    ${Title} {
      font-size: ${(props) => props.theme.font(24)};
    }

    ${Category} {
      font-size: ${(props) => props.theme.font(14)};
      line-height: 1.3;
    }

    ${Member} {
      font-size: ${(props) => props.theme.font(12)};
    }
  }

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    overflow: auto;
    justify-content: flex-start;

    &.open {
      width: 100%;
    }

    ${Description} {
      display: block;

      border-top: 1px solid ${(props) => props.theme.color.line};
      padding-top: 10px;

      margin-top: 0;
      overflow: initial;
    }
  }
`;

const PreviewInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  height: 100%;
`;

interface PreviewProps {
  $currentIndex: number;
  $prevIndex: number;
  $index: number;
  $active: boolean;
  $previewDetail: { x: number; y: number; width: number; height: number };
}

const gap = {
  desktop: '30px',
  tablet: '20px',
  mobile: '20px',
};

const line = {
  desktop: 3,
  tablet: 2,
  mobile: 1,
};

const getTranslate = (index: number, media: keyof typeof line) => {
  return `translateY(calc(${Math.floor(index / line[media])} * (100% + ${gap[media]})))`;
};

const getLeft = (index: number, media: keyof typeof line) => {
  switch (media) {
    case 'desktop':
      return `calc(${index % line.desktop} * ((100% - ${gap.desktop} * ${line.desktop - 1}) / ${line.desktop} + ${gap.desktop}))`;

    default:
      return `calc(${index % line[media]} * ((100% - ${gap[media]}) / ${line[media]} + ${gap[media]}))`;
  }
};

const openPortfolioDetail = ({
  x,
  y,
  width,
  height,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
}) => keyframes`
  0% {
    top: ${y}px;
    left: ${x}px;
    transform: none;

    width: ${width}px;
    height: ${height}px;
  }

 60% {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: ${width}px;
    height: ${height}px;

    padding: 0;
  }

  100% {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 80%;
    height: 70%;

    padding: 20px;
  }
`;

const closePortfolioDetail = ({
  x,
  y,
  width,
  height,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
}) => keyframes`
  0% {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 80%;
    height: 70%;

    padding: 20px;
  }

  40% {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: ${width}px;
    height: ${height}px;

    padding: 0;
  }

  100% {
    top: ${y}px;
    left: ${x}px;
    transform: none;

    width: ${width}px;
    height: ${height}px;
  }
`;

const resizeButton = keyframes`
  0% {
    width: 100%;
    height: 100%;
  }

  50% {
    width: 100%;
    height: 100%;
  }

  100% {
    width: 350px;
    height: auto;
  }
`;

const reverseResizeButton = keyframes`
  0% {
    width: 350px;
  }

  50% {
    width: 100%;
  }

  100% {
    width: 100%;
  }
`;

const gapAni = keyframes`
  0% {
    gap: 0;
  }

  90% {
    gap: 0;
  }

  100% { 
    gap: 20px;
  }
`;

const Preview = styled.div<PreviewProps>`
  position: absolute;
  z-index: 1;

  ${(props) =>
    props.$currentIndex === -1
      ? css`
          left: ${getLeft(props.$prevIndex, 'desktop')};
          top: 0;

          transform: ${getTranslate(props.$prevIndex, 'desktop')} scale(0);
          opacity: 0;
          transition: all 0.4s;
        `
      : css`
          left: ${getLeft(props.$currentIndex, 'desktop')};
          top: 0;

          transform: ${getTranslate(props.$currentIndex, 'desktop')};
          transition: all 0.4s;
        `}

  width: ${`calc((100% - ${gap.desktop} * ${line.desktop - 1}) / ${line.desktop})`};
  height: auto;

  aspect-ratio: 1232 / 711;

  overflow: hidden;

  border: 2px solid ${(props) => props.theme.color.line};
  border-radius: 20px;

  ${PreviewInfo} {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    width: 100%;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;

    transition: all 0.4s;
  }

  img {
    width: 100%;
    height: 100%;

    background-color: ${(props) => props.theme.color.white};
  }

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    width: ${`calc((100% - ${gap.tablet}) / 2)`};

    ${(props) =>
      props.$currentIndex === -1
        ? css`
            left: ${getLeft(props.$prevIndex, 'tablet')};
            top: 0;

            transform: ${getTranslate(props.$prevIndex, 'tablet')} scale(0);
            opacity: 0;
            transition: all 0.4s;
          `
        : css`
            left: ${getLeft(props.$currentIndex, 'tablet')};
            top: 0;

            transform: ${getTranslate(props.$currentIndex, 'tablet')};
            transition: all 0.4s;
          `}
  }

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    width: 100%;

    ${(props) =>
      props.$currentIndex === -1
        ? css`
            left: ${getLeft(props.$prevIndex, 'mobile')};
            top: 0;

            transform: ${getTranslate(props.$prevIndex, 'mobile')} scale(0);
            opacity: 0;
            transition: all 0.4s;
          `
        : css`
            left: ${getLeft(props.$currentIndex, 'mobile')};
            top: 0;

            transform: ${getTranslate(props.$currentIndex, 'mobile')};
            transition: all 0.4s;
          `}
  }

  ${(props) =>
    props.$active
      ? css`
          position: fixed;
          z-index: 3;

          display: flex;
          flex-direction: column;

          animation: ${openPortfolioDetail(props.$previewDetail)} 1s forwards;

          background-color: ${props.theme.color.black};

          ${PreviewInfo} {
            height: auto;

            animation: ${gapAni} 1s forwards;
          }

          button {
            aspect-ratio: 1232 / 711;

            border-radius: 10px;
            border: 2px solid ${props.theme.color.white};

            overflow: hidden;

            animation: ${resizeButton} 1s forwards;
          }

          &.close {
            animation: ${closePortfolioDetail(props.$previewDetail)} 1s forwards;

            ${PreviewInfo} {
              animation: none;
            }

            ${Detail} {
              display: none;
            }

            ${Description} {
              display: none;
            }

            button {
              max-width: 100%;
              height: 100%;

              border: none;

              animation: ${reverseResizeButton} 1s forwards;
            }
          }

          @media (max-width: ${props.theme.media.mobile}) {
            ${PreviewInfo} {
              flex-direction: column;
              height: 100%;
            }

            button {
              max-width: 100%;
            }
          }
        `
      : css`
          &:hover {
            img {
              transform: scale(1.05);
              transition: all 0.4s;
            }

            ${PreviewDetails} {
              opacity: 1;
            }
          }
        `}
`;

const Overlay = styled.button`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: ${(props) => props.theme.color.boxShadow};
`;

interface ContainerProps {
  $currentIndex: number;
  $active: boolean;
}

const Container = styled.li<ContainerProps>`
  position: ${(props) => (props.$active ? 'relative' : 'initial')};
  z-index: ${(props) => (props.$active ? 3 : 1)};

  width: calc((100% - 60px) / 3);
  height: ${(props) => (props.$currentIndex === -1 ? '0' : 'auto')};

  aspect-ratio: 1232 / 711;
  transition: all 0.4s;

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    width: ${`calc((100% - ${gap.tablet}) / 2)`};
  }

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    width: 100%;
  }
`;

const PortfolioItemStyle = {
  Container,
  Preview,
  Overlay,
  PreviewInfo,
  PreviewDetails,
  Detail,
  Title,
  Category,
  Member,
  Description,
  ActionLinks,
};

export default PortfolioItemStyle;
