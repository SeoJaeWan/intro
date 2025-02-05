import Section from '@/components/atoms/common/section/section.style';
import styled from 'styled-components';

const Container = styled(Section)`
  padding-top: 60px;
  padding-bottom: 80px;
`;

const Title = styled.h2`
  display: inline-block;
  font-size: ${(props) => props.theme.font(14)};
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CareerListStyle = {
  Container,
  Title,
  ListBox,
};

export default CareerListStyle;
