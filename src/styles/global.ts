import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url('/fonts/poppins-v15-latin-300.eot'); 
  src: local(''),
       url('/fonts/poppins-v15-latin-300.eot?#iefix') format('embedded-opentype'),
       url('/fonts/poppins-v15-latin-300.woff2') format('woff2'), 
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/poppins-v15-latin-regular.eot'); 
  src: local(''),
       url('/fonts/poppins-v15-latin-regular.eot?#iefix') format('embedded-opentype'), 
       url('/fonts/poppins-v15-latin-regular.woff2') format('woff2'), 
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('/fonts/poppins-v15-latin-500.eot'); 
  src: local(''),
       url('/fonts/poppins-v15-latin-500.eot?#iefix') format('embedded-opentype'), 
       url('/fonts/poppins-v15-latin-500.woff2') format('woff2'), 
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/fonts/poppins-v15-latin-700.eot'); 
  src: local(''),
       url('/fonts/poppins-v15-latin-700.eot?#iefix') format('embedded-opentype'), 
       url('/fonts/poppins-v15-latin-700.woff2') format('woff2'),
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.sizes.medium};
    }
  `}
`

export default GlobalStyles
