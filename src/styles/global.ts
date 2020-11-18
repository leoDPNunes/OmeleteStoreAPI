import { createGlobalStyle } from 'styled-components';

import omeleteBackground from '../assets/Omelete.svg';
// import github from '../assets/github-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #d9d4d1 url(${omeleteBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialised;
  }

  border-style, :-ms-input-placeholder, button {
    font: 16px Ubuntu, Arial, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
