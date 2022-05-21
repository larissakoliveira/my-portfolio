import { NavBarDivSection, NavBarItems } from "./style";

const Header = () => {
  return (
    <NavBarDivSection>
      <NavBarItems href="#start">&lt;/início&gt;</NavBarItems>
      <NavBarItems href="#projects">&lt;/projetos&gt;</NavBarItems>
      <NavBarItems href="#aboutMe">&lt;/sobre&gt;</NavBarItems>
      <NavBarItems href="#contacts">&lt;/contatos&gt;</NavBarItems>
    </NavBarDivSection>
  );
};

export default Header;
