import styled from "styled-components"

export const NavBarDivSection = styled.header`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  width: 100%;
  height: 8vh;
  position: fixed;
  top: 0px;
  align-items: center;
  opacity: 0.92;
  background-image: linear-gradient(
    #000000,
    #212529
  );
  transition: top 0.8s;
  z-index: 9;
  
  nav {
    position: fixed;
  }
  
  a {
    font-family: roboto;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    font-size: calc(0.5em + 1vw);
    padding: 12px;
  }


  @media only screen and (min-width: 615px) {
    
  .mobile {
    display: none;
  }
  }  

`;


