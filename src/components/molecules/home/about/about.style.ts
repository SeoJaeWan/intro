import Section from '@/components/atoms/common/section/section.style';
import styled from 'styled-components';

const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  min-height: auto;

  padding-top: 15vh;
  padding-bottom: 15vh;
`;

const Title = styled.h2`
  display: inline-block;
  font-size: ${(props) => props.theme.font(18)};

  margin-bottom: 50px;

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    font-size: ${(props) => props.theme.font(12)};
  }
`;

const AboutStyle = {
  Container,
  Title,
};

export default AboutStyle;
