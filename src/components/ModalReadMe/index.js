import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";

const ModalReadMe = ({ title, body }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text cursor={"pointer"} onClick={onOpen}>
        README.md
      </Text>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />

          <ModalBody>{body}</ModalBody>

          <ModalFooter>
            <Button cursor="pointer" bg="red" mr={3} onClick={onClose}>
              X
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalReadMe;
