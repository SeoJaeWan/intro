import styled from 'styled-components';

const Section = styled.section`
  position: relative;

  width: 100%;
  min-height: 100vh;

  padding: 0 100px;

  &::after {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);

    content: '';
    display: block;

    width: calc(100% - 200px);
    height: 0.5px;

    background-color: ${(props) => props.theme.color.line};
    opacity: 0.3;
  }

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    padding: 0 50px;

    &::after {
      width: calc(100% - 100px);
    }
  }

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    padding: 0 20px;

    &::after {
      width: calc(100% - 40px);
    }
  }
`;

export default Section;
