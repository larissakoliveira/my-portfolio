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

    .whatsappClass {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      padding: 0;
      font-size:1.2em;
    }

    .whatsappClass:hover {
      color:  #B95941
   }

    .sendMsg {
      margin-top: 4rem;
    }

    p {
      margin: 0;
    }

    h2 {
      text-align: center;
    }
    
    a {
        cursor: pointer;
        font-size:1.2em;
        text-decoration: none;
        color:  #fff;
    }
    a:hover {
      color:  #B95941
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