import Section from '@/components/atoms/common/section/section.style';
import styled from 'styled-components';

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
}

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

const ThumbnailList = styled.ul`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  width: 100%;

  margin-top: 20px;
`;

const PortfolioListStyle = {
  Container,
  Title,
  CategoryList,
  CategoryButton,
  ThumbnailList,
};

export default PortfolioListStyle;
