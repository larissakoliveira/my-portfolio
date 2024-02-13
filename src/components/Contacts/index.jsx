import { SiLinkedin } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { MainDiv } from "./style";
import { FormContact } from "../FormContact";
import { RiWhatsappFill } from "react-icons/ri";

export const Contacts = ({ onOpen }) => {
  return (

    <MainDiv id='contacts'>
      <h1>&lt;/contacts&gt;</h1>
      <div>
        <a href="https://www.linkedin.com/in/larissakoliveira/">
          LinkedIn &#60;-
          <SiLinkedin size="39px" color='#0B66C2' />
        </a>
        <h2>||</h2>
        <div className="whatsappClass">
          <RiWhatsappFill color="#199E0D" size="39px" cursor="pointer" />
          <a
          target="_blank"
          rel="noreferrer"
            href=
            "https://api.whatsapp.com/send?phone=5521998836527&text=%20Olá!"
          >WhatsApp</a>
          <a href="tel:5551234567"> +55 21 99883-6527</a>
        </div>

        <h2>||</h2>
        <a href="https://github.com/larissakoliveira">
          <BsGithub color='#ffffff' size="39px" />
          -&#62; GitHub
        </a>
      </div>
      <FormContact />
    </MainDiv>
  )
};
