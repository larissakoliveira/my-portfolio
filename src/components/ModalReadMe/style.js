import styled from "styled-components";

export const CloseModal = styled.button`
  background-color: transparent;
  border: none;
  color: red;
  font-weight: bold;
  font-size: 22px;
  position: absolute;
  z-index: 1;
  right: 5px;
  top: 5px;
  cursor: pointer;
`;

export const ModalContent = styled.div`

  h2 {
    margin-bottom: 20px;
    color: #fff;
    cursor: pointer;
    margin-top: 5px;
  }

`;