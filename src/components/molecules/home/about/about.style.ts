import Section from '@/components/atoms/common/section/section.style';
import styled from 'styled-components';

const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Title = styled.h2`
  display: inline-block;
  font-size: ${(props) => props.theme.font(18)};

  margin-bottom: 50px;
`;

const AboutStyle = {
  Container,
  Title,
};

export default AboutStyle;
