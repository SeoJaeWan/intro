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

const OtherLinkList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  font-size: ${(props) => `max(1vw, ${props.theme.font(20)})`};
`;

const Description = styled.p`
  flex: 1;
  width: 100%;

  margin-top: 20px;

  font-size: ${(props) => `max(1vw, ${props.theme.font(20)})`};
`;

const ThumbnailInfo = styled.span`
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

  background-color: ${(props) => props.theme.color.portfolio};

  opacity: 0;
  transition: all 0.4s;
`;

const showDetail = keyframes`
  from {
    flex:1;
    height: auto;
    opacity: 0;
    transform: translateY(40px);
    margin-left: 20px;
  }
  
  to {
    flex:1;
    height: auto;
    opacity: 1;
    transform: translateY(0);
    margin-left: 20px;
  }
`;

const DetailInfo = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  width: 0;
  height: 0;

  padding-top: 30px;

  color: ${(props) => props.theme.color.text};

  opacity: 0;
  overflow: hidden;
  animation: ${showDetail} 2s 1s forwards;
`;

interface ThumbnailProps {
  $currentIndex: number;
  $prevIndex: number;
  $index: number;
  $active: boolean;
  $thumbnailInfo: { x: number; y: number; width: number; height: number };
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

const showCenter = ({
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
    height: 80%;

    padding: 20px;
  }
`;

const closeCenter = ({
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
    height: 80%;

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

const Thumbnail = styled.div<ThumbnailProps>`
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

  & > div {
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

  &.close {
    position: fixed;
    z-index: 3;

    display: flex;
    flex-direction: column;

    animation: ${(props) => closeCenter(props.$thumbnailInfo)} 1s forwards;

    ${DetailInfo} {
      animation: none;
    }

    ${Description} {
      display: none;
    }

    button {
      width: 100%;
      height: 100%;
    }
  }

  ${(props) =>
    props.$active
      ? css`
          position: fixed;
          z-index: 3;

          display: flex;
          flex-direction: column;

          animation: ${showCenter(props.$thumbnailInfo)} 1s forwards;

          background-color: ${(props) => props.theme.color.black};

          & > div {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            height: auto;
          }

          button {
            width: 100%;
            max-width: 500px;
            height: auto;

            aspect-ratio: 1232 / 711;

            border-radius: 10px;
            border: 2px solid ${(props) => props.theme.color.white};

            overflow: hidden;
          }
        `
      : css`
          &:hover {
            img {
              transform: scale(1.05);
              transition: all 0.4s;
            }

            ${ThumbnailInfo} {
              opacity: 1;
            }
          }
        `}
`;

const Shadow = styled.button`
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
  Thumbnail,
  Shadow,
  ThumbnailInfo,
  DetailInfo,
  Title,
  Category,
  Member,
  Description,
  OtherLinkList,
};

export default PortfolioItemStyle;
