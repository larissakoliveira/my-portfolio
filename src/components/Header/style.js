import styled from "styled-components"

export const NavBarDivSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  width: 100vw;
  height: 8vh;
  position: fixed;
  top: 0px;
  opacity: 10;
  align-items: center;
  border-radius: 7px;
  opacity: 0.87;
  background-image: linear-gradient(
    #000000,
    #113537
  );
  transition: top 0.8s;
  z-index: 9;
`;

export const NavBarItems = styled.a`
    font-size: 1.7em;
    font-family: roboto;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
`