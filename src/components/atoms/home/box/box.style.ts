import { ColorType } from '@/style/theme';
import styled from 'styled-components';

const Container = styled.span`
  position: relative;

  display: inline-block;

  font-weight: 500;
`;

interface ContentProps {
  $color: keyof ColorType;
}

const Content = styled.span<ContentProps>`
  position: relative;
  z-index: 1;

  display: inline-block;

  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color[props.$color]};
`;

const BoxShadow = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: -1;

  display: inline-block;

  width: 100%;
  height: 100%;

  border-radius: 10px;
  background-color: ${(props) => props.theme.color.boxShadow};
`;

const BoxStyle = {
  Container,
  Content,
  BoxShadow,
};

export default BoxStyle;
