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
`;

export default Section;
