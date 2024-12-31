import Section from '@/components/atoms/common/section/section.style';
import styled from 'styled-components';

const Container = styled(Section)`
  width: 100vw;
  height: 300vh;

  padding: 0;
`;

const Box = styled.div`
  position: sticky;
  top: 0;

  overflow: hidden;

  width: 100vw;
`;

const Layout = styled.div`
  display: flex;

  width: fit-content;
  transition: transform 0.5s;
`;

const Article = styled.article`
  width: fit-content;
  height: 100vh;

  &:first-child {
    padding-left: 150px;
  }

  &:last-child {
    padding-right: 150px;
  }
`;

const MoreStyle = {
  Container,
  Box,
  Layout,
  Article,
};

export default MoreStyle;
