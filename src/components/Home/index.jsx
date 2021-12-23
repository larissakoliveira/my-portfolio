import { MainDiv } from "./style";
import Typing from 'react-typing-animation';

export const Home = () => {


  return (
    <MainDiv id='start'>
        <p className="start">&lt;/inicio&gt;</p>
        <Typing speed={20}>
        <h1> Olá! </h1><br/>
        <p>
        Meu nome é {<a href='#aboutMe'>Larissa Oliveira</a>}, <br/> 
        sou dev front-end! <br/> <br/> 
        Venha conhecer melhor meu portfólio...
        </p>
        </Typing>
    </MainDiv>
  );
};
