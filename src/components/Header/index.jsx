import { Flex } from "@chakra-ui/react"


const Header = () => {

    return (
        <Flex
        justifyContent='space-evenly'
        fontSize='25px'
        mt='10px'
        fontFamily='roboto'
        >
          <a href="#start">&lt;/início&gt;</a>
          <a href="#projects">&lt;/projetos&gt;</a>
          <a href="#aboutMe">&lt;/sobre&gt;</a>
          <a href="#contact">&lt;/contatos&gt;</a>
      </Flex>
    )
}

export default Header