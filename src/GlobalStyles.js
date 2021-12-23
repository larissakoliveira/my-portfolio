import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: black;
        color: #ffffff;
        font-weight: bold;
        font-family: 'Fira Code', monospace;
        overflowX: "hidden",
        overflowY: "auto",
    "&::-webkit-scrollbar": {
        width: "10px",
      },

      "&::-webkit-scrollbar-track": {
        background: "green",
      },

      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "purple",
      }
    }

`
export default GlobalStyle