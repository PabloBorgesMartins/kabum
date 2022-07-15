import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --white: #ffffff;
    --black: #000000;

    --gray-100: #fafafb;
    --gray-200: #f0eeee;
    --gray-900: #121214;

    --blue-300: #4781b5;
    --blue-400: #355eae;
    --blue-800: #002048;

    --orange-900: #ff6500;
  }
    
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media(max-width: 1080px){
      font-size: 93.75%;
    }
    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }

  body{
    -webkit-font-smoothing: antialised;
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--gray-900);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--gray-100);
    border-radius: 16px;
  }
`
