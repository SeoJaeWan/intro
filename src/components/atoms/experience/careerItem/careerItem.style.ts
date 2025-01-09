import styled from 'styled-components';

const Indecator = styled.div`
  width: 50px;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: ${(props) => props.theme.font(30)};
  margin-bottom: 5px;
`;

const PositionAndPeriod = styled.p`
  font-size: ${(props) => props.theme.font(14)};
  color: ${(props) => props.theme.color.gray};
`;

const ContentsList = styled.ul`
  line-height: 1.5;
`;

interface ContentItemProps {
  $delay: number;
}

const ContentItem = styled.li<ContentItemProps>`
  margin-top: 15px;

  transition: all 0.5s ${(props) => props.$delay}s;

  h4 {
    font-size: ${(props) => props.theme.font(24)};
  }

  & > p {
    font-size: ${(props) => props.theme.font(14)};
    color: ${(props) => props.theme.color.gray};
  }

  ul {
    list-style: disc inside;

    font-size: ${(props) => props.theme.font(16)};
    line-height: 1.8;
  }

  strong,
  a {
    font-weight: 900;
  }
`;

const Container = styled.article`
  display: flex;

  width: 100%;
  margin-top: 50px;
  opacity: 0;
  transition: all 0.5s;

  & * {
    opacity: 0;
  }

  &.show {
    opacity: 1;

    & * {
      opacity: 1;
    }
  }
`;

const CareerItemStyle = {
  Container,
  Indecator,
  Content,
  Title,
  PositionAndPeriod,
  ContentsList,
  ContentItem,
};

export default CareerItemStyle;
