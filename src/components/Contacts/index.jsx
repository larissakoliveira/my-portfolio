import { SiLinkedin } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { MainDiv } from "./style";

export const Contacts = () => {
  return (
    <MainDiv id='contacts'>
      <h1>&lt;/contatos&gt;</h1>
      <div>
      <a href="https://www.linkedin.com/in/oliveir5/">
        Meu LinkedIn &#60;- 
        <SiLinkedin size="39px" color='#0B66C2' />
      </a>
      <h2>||</h2>
      <a href="https://github.com/larissakoliveira">
        <BsGithub  color='#ffffff' size="40px"/>
       -&#62; Meu GitHub
      </a>
      </div>
      <button>Fale Comigo</button>
    </MainDiv>
  );
};
