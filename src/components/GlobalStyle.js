import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

:root {
  --color-text-first: #121417;
  --color-text-second: #3470FF;
  --color-button: #3470FF;
  --color-button-hover: #0B44CD;
  --color-button-text: #FFFFFF;
  --color-text-label: #8A8A89;
  --color-background-input: #F7F7FB;
}

body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    background-color: #ffffff;

	margin: 0 auto;
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;
  color: var(--color-text-main);
  }

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

button {
  cursor: pointer;
}
`;
