import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI',
      'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', Arial, sans-serif;
    font-size: 1.6rem;
    line-height: 1.65;
    color: #373f49;
    margin: 0;
  }

  a {
    color: currentColor;
  }
`