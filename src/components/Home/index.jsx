import { MainDiv } from "./style";
import Typing from 'react-typing-animation';

export const Home = () => {

  return (
    <MainDiv>
        <p className="start">&lt;/start&gt;</p>
        <Typing speed={60}>
          <div className="home-container">
            <h1> Hey! </h1>
            <p>I am {<a href='#aboutMe'>Larissa Oliveira</a>}, <br/> 
              Full Stack Developer! <br/> <br/> 
              Come and check my portfolio<span id="typing-ellipsis">...</span>
            </p>
          </div>
        </Typing>
    </MainDiv>
  );
};
