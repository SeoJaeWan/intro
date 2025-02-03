import Section from '@/components/atoms/common/section/section.style';
import styled from 'styled-components';

const Container = styled(Section)`
  padding-top: 80px;
`;

const LabList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  width: 100%;
  height: 100%;
`;

const LabStyle = {
  Container,
  LabList,
};

export default LabStyle;
