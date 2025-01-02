import * as styled from 'styled-components';

const Global = styled.createGlobalStyle`
  html,
  body {
  }

  * {
    z-index: 1;

    box-sizing: border-box;
    padding: 0;
    margin: 0;

    font-family: var(--font-pretendard);
    color: ${(props) => props.theme.color.text};
  }

  a {
    color: inherit;
    text-decoration: none;

    cursor: pointer;
  }

  ul,
  ol {
    list-style: none;
  }

  button {
    border: none;
    outline: none;
    background: none;

    cursor: pointer;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .a11y {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }

  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
`;

export default Global;
