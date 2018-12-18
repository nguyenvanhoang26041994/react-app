import { createGlobalStyle } from 'styled-components';

import './components/style';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 14px;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body.fontLoaded {
    font-family: 'Roboto', sans-serif;
  }

  #app {
    background-color: whitesmoke;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
