import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --white: #fff;
    
    --gray-100: #f6f6f6;
    --gray-300: #ededed;

    --green: #00a786;
    --red: #f75a68;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 2px var(--green);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--gray-300);
    color: #324A6D;
    -webkit-font-smoothing: antialiased;
  }

  body, a, input, select, textarea, button, code {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
`;
