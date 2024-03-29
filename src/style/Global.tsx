import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MyWebFont';
    src: url('Font.ttf') format('truetype');
  }

  * {
    font-family: 'MyWebFont';
  }
  body {
    background-image: url("bg.jpg");

    background-color: ${({ theme }) => theme.colors.background};

    h2 {
      color: white!important;
    }

    h1 {
      color: white!important;
    }

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
