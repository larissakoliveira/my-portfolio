import { DivProjects, MainSection } from "./style";
import cookin from "../../assets/Video/cookin.mp4";
import kenzieHub from "../../assets/Video/kenzieHub.mp4";
import quiz from "../../assets/Video/quiz.webm";
import betterLife from "../../assets/Video/better-life.mp4";
import adm from "../../assets/Video/adm.mp4";
import rockPaperScissor from "../../assets/Video/rock-paper-scissor.mp4";
import Hamburkenzie from "../../assets/Video/hamburgueria.webm"; 
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
            <a target="_blank" rel="noreferrer" href="https://lari-burguerkenzie.vercel.app/">Ecommerce HamburKenzie</a>
            <p><span>#</span>React <span>#</span>Typescript <span>#</span>JSON-server <span>#</span>Stripe <span>#</span>mobileFirst<br/><span>#</span>hookForm <span>#</span>contextApi <span>#</span>chakraUi <span>#</span>API</p>
            <video width="100%" src={Hamburkenzie} autoPlay loop muted />
              
            <ModalReadMe content={"API feita com o json-server. Aplicação ecommerce de fastfood. Feito o cadastro e logado, é só escolher dentre os produtos disponíveis, colocar no carrinho, aceitamos cartão de crédito/débito ou pix, coloque seu endereço e logo seu pedido estará em sua casa."} title={"Hamburkenzie"}/>
          </div>

          <div>
          <a target="_blank" rel="noreferrer" href="https://lari-dev-quiz.vercel.app/">Dev Quiz</a>
            <p><span>#</span>React <span>#</span>CSS <span>#</span>JavaScript <span>#</span>mobileFirst<br/><span>#</span>react <span>#</span>axios<span> #</span>toastify</p>
            <video width="100%" src={quiz} autoPlay loop muted />
            
            <ModalReadMe content={"Quiz para testar seus conhecimentos em tecnologia!"} title={"Dev Quiz"}/>
          </div>
        
        </DivProjects>
        <DivProjects>
          <div>
           
            <a target="_blank" rel="noreferrer" href="https://lari-rock-paper-scissors.vercel.app/"> Pedra, Papel, Tesoura</a>
            <p><span>#</span>CSS<span> #</span>JavaScript Vanilla<span> #</span>mobileFirst<br/> <span> #</span>manipulação do DOM <span> #</span>HTML </p>
            <video width="100%" src={rockPaperScissor} autoPlay loop muted />
            <ModalReadMe content={"Jogo simples e tradicional, feito com javascript, html e css puro, através de manipulação do DOM. As regras são: pedra é maior que tesoura, tesoura é maior que papel, papel maior que pedra."} title={"Pedra, Papel e Tesoura"}/>
          </div>
                   
          <div>
            <a target="_blank" rel="noreferrer" href="https://react-entrega-s2-kenzie-hub-larissakoliveira.vercel.app/">KenzieHub</a>
            <p><span>#</span>React <span>#</span>JavaScript <span>#</span>mobileFirst<br/> <span>#</span>styled-component <span>#</span>yup <span>#</span>HTML <span>#</span>materialUi  </p>
            <video width="100%" src={kenzieHub} autoPlay loop muted />
            <ModalReadMe content={"Aplicação para Devs, a qual permite o usuário após devidamente cadastrado e logado, adicionar/deletar as tecnologias que está estudando ou já estudou e o nível em que se encontra."} title={"KenzieHub"}/>
          </div>

        </DivProjects>
        <h1 className="subtitle"><span>&#60;h1&#62; </span>Trabalhando em equipe <span>&#60;/h1&#62;</span></h1>
        <DivProjects>
          <div>
            <a target="_blank" rel="noreferrer" href="https://cookin-receitas-afetivas.vercel.app/">BetterLifeApp</a>
            <p><span>#</span>mobileFirst <span>#</span>React <span>#</span>cz-conventional-changelog <br/> <span>#</span>react-google-charts <span>#</span>axios <span>#</span>API  </p>
            <video width="100%" src={betterLife} autoPlay loop muted />
            <ModalReadMe content={"Aplicação construída em grupo para gerenciamento de hábitos saudáveis, com ela é possível adicionar novos hábitos,colocar metas, entrar em grupos que buscam o mesmo objetivo. A documentação da API usada encontra-se em https://github.com/Kenzie-Academy-Brasil-Developers/habits-api"} title={"BetterLifeApp"}/>
          </div>
          <div>
            <a target="_blank" rel="noreferrer" href="https://better-life-app.vercel.app/">Cookin'App</a>
            <p><span>#</span>React <span>#</span>mobileFirst <span>#</span>JavaScript <span>#</span>cypress <br/><span>#</span>jwt-decode <span>#</span>react-google-login <span>#</span>JSON-server  </p>
            <video width="100%" src={cookin} autoPlay loop muted />
            <ModalReadMe content={"Aplicação construída em grupo, foi feita como uma rede social para compartilhamento de receitas, nela você tem a opção de se cadastrar de forma mais fácil usando sua conta do Google, ter acesso a todas receitas que são públicas, cadastrar suas receitas e compartilhar. A url base da API que criamos para a aplicação é https://api-cookin.herokuapp.com "} title={"Cookin'App"}/>
          </div>
        </DivProjects>
      </MainSection>
    </Flex>
  );
};
