import * as styled from 'styled-components';

const Global = styled.createGlobalStyle`
  html,
  body {
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    font-family: var(--font-pretendard);
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
`;

export default Global;
