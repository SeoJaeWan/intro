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

  transition: all 0.5s;

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    bottom: 50%;
    transform: translateY(220px);
  }

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    left: 10px;
    bottom: 50%;
    transform: translateY(120px);
    font-size: ${(props) => props.theme.font(12)};
  }
`;

const HeroStyle = {
  Container,
  Info,
};

export default HeroStyle;
