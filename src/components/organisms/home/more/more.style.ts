import Section from '@/components/atoms/common/section/section.style';
import styled from 'styled-components';

const Container = styled(Section)`
  width: 100vw;
  height: 300vh;

  padding: 0;

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    min-height: auto;
    height: auto;

    padding: 0 50px;
  }

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    padding: 0 20px;
  }
`;

const Box = styled.div`
  position: sticky;
  top: 0;

  overflow: hidden;

  width: 100vw;

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    position: relative;

    width: 100%;
  }
`;

const Layout = styled.div`
  display: flex;

  width: fit-content;
  transition: transform 0.5s;

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    flex-direction: column;

    width: 100%;
  }
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

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    width: 100%;
    height: auto;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }
`;

const MoreStyle = {
  Container,
  Box,
  Layout,
  Article,
};

export default MoreStyle;
