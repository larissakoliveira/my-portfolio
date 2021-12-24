import { DivProjects, MainSection } from "./style";
import kenzieHub from "../../assets/Images/kenziehub.png";
import codingBackground from "../../assets/Video/code-coding.mp4";
import { Flex } from "@chakra-ui/react";

export const Projects = () => {
  return (
    <Flex id="projects">
      <MainSection>
        <h1 className="projects">&lt;/projetos&gt;</h1>
        <h1 className="subtitle">Projetos individuais</h1>
        <DivProjects>
          <div>
            <h2>KenzieHub</h2>
            <video width="100%" src={codingBackground} autoPlay loop muted />
            {/* <img alt='Kenzie Hub Project'src={kenzieHub}/> */}
          </div>
          <div>
            <h2>KenzieHub</h2>
            <video width="100%" src={codingBackground} autoPlay loop muted />
          </div>
        </DivProjects>
        <DivProjects>
          <div>
            <h2>KenzieHub</h2>
            <video width="100%" src={codingBackground} autoPlay loop muted />
          </div>
          <div>
            <h2>KenzieHub</h2>
            <video width="100%" src={codingBackground} autoPlay loop muted />
          </div>
        </DivProjects>
        <h1 className="subtitle">Trabalhando em equipe</h1>
        <DivProjects>
        
          <div>
            <h2>KenzieHub</h2>
            <video width="100%" src={codingBackground} autoPlay loop muted />
          </div>
          <div>
            <h2>KenzieHub</h2>
            <video width="100%" src={codingBackground} autoPlay loop muted />
          </div>
        </DivProjects>
      </MainSection>
    </Flex>
  );
};
