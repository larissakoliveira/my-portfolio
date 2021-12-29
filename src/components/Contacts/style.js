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

    h2 {
      text-align: center;
    }
    
    a {
        cursor: pointer;
        font-size:1.7em;
        text-decoration: none;
        color:  #5A49AD;
    }
    a:hover {
      color:  #113537
   }

      a:active {
        color: none;
      }

    button {
      text-align: center;
      background-image: linear-gradient(to bottom right, purple, blue);
      cursor: pointer;
      padding: 5px;
      color: #ffffff;
      border-radius: 7px;
      font-weight: bold;
      font-size: 24px;
      font-family:roboto;
      width: 25%;
      margin: 15px auto;
    }

    button:hover {
      background-image: linear-gradient(
        #000000,
        #113537
      );
    }
    
    `