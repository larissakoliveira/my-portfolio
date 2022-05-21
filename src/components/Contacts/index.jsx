import { SiLinkedin } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { MainDiv } from "./style";
import { FormContact } from "../FormContact";
import { RiWhatsappFill } from "react-icons/ri";

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
      <div
      className="whatsappClass"
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send?phone=5521998836527&text=%20Olá",
              "_blank"
            )
          }
        >
         
            <RiWhatsappFill color="#199E0D" size="39px" cursor="pointer"/> 
            <p>WhatsApp</p>
            <p> +55 21 99883-6527</p>
         
          </div>
          
           
        
      <h2>||</h2>
      <a href="https://github.com/larissakoliveira">
        <BsGithub  color='#ffffff' size="40px"/>
       -&#62; GitHub
      </a>
      </div>
      <h2 className="sendMsg">Ou envie uma mensagem por aqui mesmo!</h2>
      <FormContact/>
    </MainDiv>
  );
};
