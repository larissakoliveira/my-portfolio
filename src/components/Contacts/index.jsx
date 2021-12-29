import { SiLinkedin } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { MainDiv } from "./style";
import { FormContact } from "../FormContact";

export const Contacts = ({onOpen}) => {
  return (
    <MainDiv id='contacts'>
      <h1>&lt;/contatos&gt;</h1>
      <div>
      <a href="https://www.linkedin.com/in/oliveir5/">
        LinkedIn &#60;- 
        <SiLinkedin size="39px" color='#0B66C2' />
      </a>
      <h2>||</h2>
      <a href="https://github.com/larissakoliveira">
        <BsGithub  color='#ffffff' size="40px"/>
       -&#62; GitHub
      </a>
      </div>
      <h2>Envie uma mensagem!</h2>
      <FormContact/>
    </MainDiv>
  );
};
