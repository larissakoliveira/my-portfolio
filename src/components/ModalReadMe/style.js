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
  text-align: center;
  width: 100%;

  .readme-trigger {
    margin: 0;
    color: #fff;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;

    &:hover {
      opacity: 0.85;
    }
  }
`;