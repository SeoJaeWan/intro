import styled, { css } from 'styled-components';

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

interface ThumbnailItemProps {
  $currentIndex: number;
  $prevIndex: number;
  $index: number;
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

const Container = styled.li<ThumbnailItemProps>`
  position: initial;

  width: calc((100% - 60px) / 3);
  height: ${(props) => (props.$currentIndex === -1 ? '0' : 'auto')};

  aspect-ratio: 1232 / 711;

  button {
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

    img {
      width: 100%;
      height: 100%;

      background-color: ${(props) => props.theme.color.white};
    }

    &:hover {
      img {
        transform: scale(1.05);
        transition: all 0.4s;
      }

      ${ThumbnailInfo} {
        opacity: 1;
      }
    }
  }
  @media (max-width: ${(props) => props.theme.media.tablet}) {
    width: ${`calc((100% - ${gap.tablet}) / 2)`};

    button {
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
  }

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    width: 100%;

    button {
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
  }
`;

const Title = styled.span`
  font-size: ${(props) => `max(2vw, ${props.theme.font(30)})`};
  font-weight: 600;
`;

const Category = styled.span`
  font-size: ${(props) => `max(1.2vw, ${props.theme.font(20)})`};
`;

const PortfolioItemStyle = {
  Container,
  ThumbnailInfo,
  Title,
  Category,
};

export default PortfolioItemStyle;
