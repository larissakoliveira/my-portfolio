import styled from "styled-components";

export const MainDiv = styled.section`
        height: 170px;  
        display: flex;
        flex-direction: column;
    div {
        display: flex;
        justify-content: space-evenly; 
        align-content: center;
        padding: 10px;
    }   

    h4 {
      font-weight: bold;
    }

    h1 {
        color: #ffffff;
        text-align: center;
        font-family= "Fira Code", monospace;
        font-size: 2em;
        padding: 10px;
    }
    
    a {
        cursor: pointer;
        font-size:1.7em;
        text-decoration: none;
    }
    a:hover {
        color: #38b000;
      }

      a:active {
        color: none;
      }

    button {
      text-align: center;
      background-image: linear-gradient(to bottom right, purple, blue);
      cursor: pointer;
      padding: 10px;
      color: #ffffff;
      border-radius: 7px;
      font-weight: bold;
      font-size: 24px;
      font-family:roboto;
      // width: 30%;
      // margin: auto;
    }

    button:hover {
      background: #38b000;
    }
    
    `