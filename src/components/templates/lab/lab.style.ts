import Section from '@/components/atoms/common/section/section.style';
import styled from 'styled-components';

const Container = styled(Section)`
  padding-top: 100px;
`;

const LabList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;

  width: 100%;
  height: 100%;

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const LabStyle = {
  Container,
  LabList,
};

export default LabStyle;
