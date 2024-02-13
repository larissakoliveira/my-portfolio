import styled from "styled-components";

export const MainDiv = styled.div`
  background-color: #18171b;
  height: 100%;
  top: 19%;
  bottom: 15%;
  left: 50vw;
  border-radius: 10px;
  opacity: 0.98;
  outline: solid 1px #000;
  margin: 100px 20px 20px;

  .home-container {
    padding: 15px;
  }

  @keyframes typing-ellipsis {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  
  #typing-ellipsis {
    animation: typing-ellipsis 1s infinite;
  }
  
  h1 {
    color: #d3d3d3;
    font-size: 2.5em;
    text-align: center;
    margin: 0;

    @media screen and (max-width: 768px) {
      font-size: 2em;
    }
  }

  .start {
    display: inline-block;
    margin: 15px 0 0 25px;
    position: relative;
    font-size: 1.4rem;
    @media screen and (max-width: 768px) {
      font-size: 1.1em;
    }
  }

  a {
    color: #fbfefb;
  }

  p {
    color: #d9d9d9;
    font-size: 1.7rem;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 1.3em;
    }
  }

  @media screen and (max-width: 625px) {
  left: 8%; 
  }
`;
