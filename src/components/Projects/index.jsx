import { DivProjects, MainSection } from "./style";
import cookin from "../../assets/Video/cookin.mp4";
import kenzieHub from "../../assets/Video/kenzieHub.mp4";
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
            <h2>Hamburkenzie</h2>
            <p><span>#</span>React <span>#</span>Typescript <span>#</span>JSON-server <span>#</span>Stripe <span>#</span>mobileFirst<br/><span>#</span>hookForm <span>#</span>contextApi <span>#</span>chakraUi <span>#</span>API</p>
            <video width="100%" src={Hamburkenzie} autoPlay loop muted />
            <a href="https://lari-burguerkenzie.vercel.app/">Website</a>
            
            <ModalReadMe content={"API feita com o json-server. Aplicação ecommerce de fastfood. Feito o cadastro e logado, é só escolher dentre os produtos disponíveis, colocar no carrinho, aceitamos cartão de crédito/débito ou pix, coloque seu endereço e logo seu pedido estará em sua casa."} title={"Hamburkenzie"}/>
          </div>
         
          <div>
            <h2>KenzieHub</h2>
            <p><span>#</span>React <span>#</span>JavaScript <span>#</span>mobileFirst<br/> <span>#</span>styled-component <span>#</span>yup <span>#</span>HTML <span>#</span>materialUi  </p>
            <video width="100%" src={kenzieHub} autoPlay loop muted />
            <ModalReadMe content={"Aplicação para Devs, a qual permite o usuário após devidamente cadastrado e logado, adicionar/deletar as tecnologias que está estudando ou já estudou e o nível em que se encontra."} title={"KenzieHub"}/>
          </div>
        
        </DivProjects>
        <DivProjects>
          <div>
            <h2>Pedra, Papel e Tesoura</h2>
            <p><span>#</span>CSS<span> #</span>JavaScript Vanilla<span> #</span>mobileFirst<br/> <span> #</span>manipulação do DOM <span> #</span>HTML </p>
            <video width="100%" src={rockPaperScissor} autoPlay loop muted />
            <ModalReadMe content={"Jogo simples e tradicional, feito com javascript, html e css puro, através de manipulação do DOM. As regras são: pedra é maior que tesoura, tesoura é maior que papel, papel maior que pedra."} title={"Pedra, Papel e Tesoura"}/>
          </div>
          <div>
            <h2>Administração de Eventos</h2>
            <p><span>#</span>Redux <span>#</span>thunk <span>#</span>JavaScript <span>#</span>mobileFirst<br/><span>#</span>react <span>#</span>axios<span> #</span>toastify</p>
            <video width="100%" src={adm} autoPlay loop muted />
            <ModalReadMe content={"Aplicativo feito para vendas de bebidas para determinados eventos, as quais vem da API https://api.punkapi.com/v2/beers."} title={"Administração de Eventos"}/>
          </div>
        </DivProjects>
        <h1 className="subtitle"><span>&#60;h1&#62; </span>Trabalhando em equipe <span>&#60;/h1&#62;</span></h1>
        <DivProjects>
          <div>
            <h2>BetterLifeApp</h2>
            <p><span>#</span>mobileFirst <span>#</span>React <span>#</span>cz-conventional-changelog <br/> <span>#</span>react-google-charts <span>#</span>axios <span>#</span>API  </p>
            <video width="100%" src={betterLife} autoPlay loop muted />
            <ModalReadMe content={"Aplicação construída em grupo para gerenciamento de hábitos saudáveis, com ela é possível adicionar novos hábitos,colocar metas, entrar em grupos que buscam o mesmo objetivo. A documentação da API usada encontra-se em https://github.com/Kenzie-Academy-Brasil-Developers/habits-api"} title={"BetterLifeApp"}/>
          </div>
          <div>
            <h2>Cookin'App</h2>
            <p><span>#</span>React <span>#</span>mobileFirst <span>#</span>JavaScript <br/><span>#</span>jwt-decode <span>#</span>cypress <span>#</span>react-google-login <span>#</span>JSON-server  </p>
            <video width="100%" src={cookin} autoPlay loop muted />
            <ModalReadMe content={"Aplicação construída em grupo, foi feita como uma rede social para compartilhamento de receitas, nela você tem a opção de se cadastrar de forma mais fácil usando sua conta do Google, ter acesso a todas receitas que são públicas, cadastrar suas receitas e compartilhar. A url base da API que criamos para a aplicação é https://api-cookin.herokuapp.com "} title={"Cookin'App"}/>
          </div>
        </DivProjects>
      </MainSection>
    </Flex>
  );
};
