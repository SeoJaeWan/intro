import Section from '@/components/atoms/common/section/section.style';
import styled, { css, keyframes } from 'styled-components';

const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding-top: 20vh;
  padding-bottom: 5vh;
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.font(18)};
`;

const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-top: 20px;

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    gap: 5px;
  }
`;

interface CategoryButtonProps {
  $active: boolean;
  $index: number;
}

const showCategoryAni = keyframes`
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const CategoryButton = styled.button<CategoryButtonProps>`
  font-size: ${(props) => `max(1.5vw,${props.theme.font(14)})`};

  padding: 5px 15px;
  border: 2px solid ${(props) => props.theme.color.line};
  border-radius: 20px;

  background-color: ${(props) =>
    props.$active ? props.theme.color.line : props.theme.color.black};
  color: ${(props) =>
    props.$active ? props.theme.color.black : props.theme.color.line};

  transition: all 0.4s;

  opacity: 0;

  animation: ${showCategoryAni} 0.5s ease
    ${(props) => 2.5 + props.$index * 0.1}s forwards;

  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) => props.theme.color.line};
      color: ${(props) => props.theme.color.black};
    }
  }

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    padding: 5px 10px;
  }
`;

interface ThumbnailListProps {
  $show: boolean;
}

const showThumbnailAni = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ThumbnailList = styled.ul<ThumbnailListProps>`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  width: 100%;

  margin-top: 20px;

  opacity: 0;
  ${(props) =>
    props.$show &&
    css`
      animation: ${showThumbnailAni} 0.5s ease-in-out forwards;
    `}
`;

const PortfolioListStyle = {
  Container,
  Title,
  CategoryList,
  CategoryButton,
  ThumbnailList,
};

export default PortfolioListStyle;
