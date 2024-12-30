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

  width: 300vw;

  transform: translateX(-100vw);
`;

const Article = styled.article`
  width: 100vw;
  height: 100vh;
`;

const MoreStyle = {
  Container,
  Box,
  Layout,
  Article,
};

export default MoreStyle;
