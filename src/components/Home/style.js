import styled from "styled-components";

export const MainDiv = styled.div`
  background-color: #18171b;
  max-width: 60%;
  height: 400px;
  position: absolute;
  top: 19%;
  bottom: 15%;
  left: 50vw;
  transform: translateX(-50%);
  border-radius: 10px;
  opacity: 0.98;
  outline: solid 1px #000;

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
    margin-top: 40px;
    font-size: 1.4rem;
    transform: rotate(-45deg);
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
    min-width: 250px;
    max-width: 275px;
    width: 275px;
    left: 0%; 
    transform: translateX(55%);
  }
`;
