import { NavBarDivSection } from "./style";
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  return (
    <NavBarDivSection>
        <nav>
      <a href="#start">&lt;/início&gt;</a>
      <a href="#projects">&lt;/projetos&gt;</a>
      <a href="#aboutMe">&lt;/sobre&gt;</a>
      <a href="#contacts">&lt;/contatos&gt;</a>
      <a target="_blank" rel="noreferrer" className="red" href="https://www.canva.com/design/DAE0_KfjgXE/khXvmYofXc7husDQzZHq-w/view?utm_content=DAE0_KfjgXE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" >&lt;/cv português&gt;</a>
      <a target="_blank" rel="noreferrer" className="red" href="https://www.canva.com/design/DAE_MNBHv6s/WsPYVH9Z32AojRUq00DijA/view?utm_content=DAE_MNBHv6s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">&lt;/cv inglês&gt;</a>
        </nav>
      <section>
      <GiHamburgerMenu className="mobile"/>
      </section>
    </NavBarDivSection>
    
  );
};

export default Header;
