import { DivProjects, MainSection } from "./style";
import codingBackground from "../../assets/Video/code-coding.mp4";
import { Flex } from "@chakra-ui/react";
import ModalReadMe from "../ModalReadMe";

export const Projects = () => {
  return (
    <Flex id="projects">
      <MainSection>
        <h1 className="projects">&lt;/projetos&gt;</h1>
        <h1 className="subtitle"><span>&#60;h1&#62;</span> Projetos Individuais <span>&#60;/h1&#62;</span></h1>
        <DivProjects>
          <div>
            <h2>Hamburkenzie</h2>
            <p><span>#</span>React <span>#</span>HTML <span>#</span>CSS <span>#</span>JavaScript <span>#</span>typescript <span>#</span>mobileFirst<br/><span>#</span>hookForm <span>#</span>contextApi <span>#</span>axios #<span>#</span>chakraUi </p>
            <video width="100%" src={codingBackground} autoPlay loop muted />
            <ModalReadMe title={"Hamburkenzie"}/>
          </div>
         
          <div>
            <h2>KenzieHub</h2>
            <p><span>#</span>React <span>#</span>JavaScript <span>#</span>mobileFirst<br/> <span>#</span>styled-component <span>#</span>yup #axios <span>#</span>API <span>#</span>materialUi  </p>
            <video width="100%" src={codingBackground} autoPlay loop muted />
            <ModalReadMe title={"KenzieHub"}/>
          </div>
        
        </DivProjects>
        <DivProjects>
          <div>
            <h2>Pedra, Papel e Tesoura</h2>
            <p><span>#</span>React <span>#</span>JavaScript <span>#</span>mobileFirst<br/> <span>#</span>styled-component <span>#</span>yup #axios <span>#</span>API <span>#</span>materialUi  </p>
            <video width="100%" src={codingBackground} autoPlay loop muted />
            <ModalReadMe title={"Pedra, Papel e Tesoura"}/>
          </div>
          <div>
            <h2>Administração de Eventos</h2>
            <p><span>#</span>React <span>#</span>HTML <span>#</span>CSS <span>#</span>JavaScript <span>#</span>typescript <span>#</span>mobileFirst<br/><span>#</span>hookForm <span>#</span>contextApi <span>#</span>axios #<span>#</span>chakraUi </p>
            <video width="100%" src={codingBackground} autoPlay loop muted />
            <ModalReadMe title={"Administração de Eventos"}/>
          </div>
        </DivProjects>
        <h1 className="subtitle"><span>&#60;h1&#62; </span>Trabalhando em equipe <span>&#60;/h1&#62;</span></h1>
        <DivProjects>
          <div>
            <h2>BetterLifeApp</h2>
            <p><span>#</span>mobileFirst <span>#</span>React <span>#</span>cz-conventional-changelog <span>#</span>CSS  <br/> <span>#</span>react-google-charts <span>#</span>axios <span>#</span>API  </p>
            <video width="100%" src={codingBackground} autoPlay loop muted />
            <ModalReadMe title={"BetterLifeApp"}/>
          </div>
          <div>
            <h2>Cookin'App</h2>
            <p><span>#</span>React <span>#</span>mobileFirst <span>#</span>JavaScript <br/><span>#</span>jwt-decode <span>#</span>cypress <span>#</span>react-google-login <span>#</span>JSON-server  </p>
            <video width="100%" src={codingBackground} autoPlay loop muted />
            <ModalReadMe body={"ajadksdh kjasndjka nskjdnaksjdnka nsdnask ndka nsdkan skndkandk asnknd akjsdnkasjn "} title={"Cookin'App"}/>
          </div>
        </DivProjects>
      </MainSection>
    </Flex>
  );
};
