import { MainDiv } from "./style";
import Typing from 'react-typing-animation';

export const Home = () => {


  return (
    <div>
    <MainDiv>
        <p className="start">&lt;/inicio&gt;</p>
        <Typing speed={30}>
        <h1> Olá! </h1><br/>
        <p>
        Sou {<a href='#aboutMe'>Larissa Oliveira</a>}, <br/> 
        dev full stack! <br/> <br/> 
        Venha conhecer melhor meu portfólio...
        </p>
        </Typing>
    </MainDiv>
    </div>
  );
};
