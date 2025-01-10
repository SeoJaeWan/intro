import styled from 'styled-components';

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

const Indicator = styled.div`
  position: absolute;
  top: 15px;
  left: 12.5px;

  display: block;

  width: 15px;
  height: 0%;
  background-color: ${(props) => props.theme.color.line};

  border-radius: 5px;

  transition: all 2.5s;

  &::before {
    content: '';

    position: absolute;
    bottom: 0px;
    left: 0px;

    width: 15px;
    height: 15px;

    background-color: ${(props) => props.theme.color.line};
    border-radius: 5px;

    transition: all 1s 2.5s;
  }
`;

const Container = styled.article`
  width: 100%;
  height: auto;

  margin-top: 50px;
  opacity: 0;
  transition: all 0.5s;

  padding-left: 50px;

  & * {
    opacity: 0;
  }

  &.show {
    opacity: 1;

    & * {
      opacity: 1;
    }

    ${Indicator} {
      height: 100%;

      &::before {
        width: 45px;
      }
    }
  }
`;

const CareerItemStyle = {
  Container,
  Title,
  PositionAndPeriod,
  ContentsList,
  ContentItem,
  Indicator,
};

export default CareerItemStyle;
