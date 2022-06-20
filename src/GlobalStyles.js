import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        min-inline-size: fit-content;
        margin: 0;
        padding: 0;
        background: black;
        color: #ffffff;
        font-weight: bold;
        font-family: 'Fira Code', monospace;
        overflow-x: "hidden";
        overflow-y: "auto";
        
      /* "&::-webkit-scrollbar": {
        width: 10px,
      },

      "&::-webkit-scrollbar-track": {
        background: green,
      },

      "&::-webkit-scrollbar-thumb": {
        backgroundColor: purple,
      }, */
    }
        :root {
          --font-navbar: 'Roboto';
          --background-main-color: #000000;
          --font-color-navbar: #ffffff;
        }

`;
export default GlobalStyle;
