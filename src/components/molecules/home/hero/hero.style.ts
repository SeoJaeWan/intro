import Section from '@/components/atoms/common/section/section.style';
import styled from 'styled-components';

const Container = styled(Section)`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

const Info = styled.div`
  position: absolute;
  bottom: 50px;
  left: 100px;

  font-size: ${(props) => props.theme.font(24)};
  font-weight: bold;
`;

const HeroStyle = {
  Container,
  Info,
};

export default HeroStyle;
