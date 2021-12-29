// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure,
//   Button,
//   Text,
// } from "@chakra-ui/react";

// const ModalReadMe = ({ title, body }) => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <>
//       <Text cursor={"pointer"} onClick={onOpen}>
//         README.md
//       </Text>
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>{title}</ModalHeader>
//           <ModalCloseButton />

//           <ModalBody>{body}</ModalBody>

//           <ModalFooter>
//             <Button cursor="pointer" bg="red" mr={3} onClick={onClose}>
//               X
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default ModalReadMe;

import { useState } from 'react';
import Modal from 'react-modal';
import { CloseModal, ModalContent } from './style';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


const ModalReadMe = ({ title, content}) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
    content.style.color = '#000';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ModalContent>
      <h2 onClick={openModal}>README.md</h2>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{title}</h2>
        <p ref={(_content) => (content = _content)}>
          {content}
        </p>
        <CloseModal onClick={closeModal}>X</CloseModal>       
        <p color={'black'}>{content}</p>     
      </Modal>
    </ModalContent>
  );
}

export default ModalReadMe