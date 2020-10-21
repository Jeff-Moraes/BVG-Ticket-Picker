import { createGlobalStyle } from 'styled-components';
import { secondaryColor, darkColor } from './colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: ${secondaryColor};
    color: ${darkColor};
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
  }
  h1, h2, h3, h4, h5, h6, strong, body, input, button {
    font-size: 10px;
    font-weight: 400;
  }
  button {
    cursor: pointer;
  }
`;