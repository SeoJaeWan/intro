import styled from 'styled-components';

const Container = styled.span`
  position: relative;

  display: inline-block;
`;

const Svg = styled.svg`
  position: absolute;

  top: 0;
  left: 10%;

  transform: translateY(-70%);

  .cls-1 {
    stroke: #fff;
    stroke-miterlimit: 10;
    stroke-width: 112px;
    stroke-dasharray: 620;
    stroke-dashoffset: 620;

    transition: stroke-dashoffset 1s;
  }

  &.show .cls-1 {
    stroke-dashoffset: 0;
  }

  .cls-1,
  .cls-2 {
    fill: none;
  }

  .cls-4 {
    fill: ${(props) => props.theme.color.red};
  }

  .cls-2 {
    stroke: ${(props) => props.theme.color.red};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 40px;
  }
`;

const RisingStyle = {
  Container,
  Svg,
};

export default RisingStyle;
