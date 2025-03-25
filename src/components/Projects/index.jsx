import { DivProjects, MainSection } from "./style";
import cookin from "../../assets/Video/cookin.mp4";
import kenzieHub from "../../assets/Video/kenzieHub.mp4";
import quiz from "../../assets/Video/quiz.webm";
import betterLife from "../../assets/Video/better-life.mp4";
import rockPaperScissor from "../../assets/Video/rock-paper-scissor.mp4";
import Hamburkenzie from "../../assets/Video/hamburgueria.webm"; 
import beeApp from "../../assets/Video/bee-app.mp4";
import { Flex } from "@chakra-ui/react";
import ModalReadMe from "../ModalReadMe";

export const Projects = () => {
  return (
    <Flex id="projects">
      <MainSection>
        <h1 className="projects">&lt;/projects&gt;</h1>
        <h1 className="subtitle"><span>&#60;h1&#62;</span> Individual Projects <span>&#60;/h1&#62;</span></h1>
        <DivProjects>
          <div>
            <a target="_blank" rel="noreferrer" href="https://lari-burguerkenzie.vercel.app/">Ecommerce HamburKenzie</a>
            <p><span>#</span>React <span>#</span>Typescript <span>#</span>JSON-server <span>#</span>Stripe <span>#</span>mobileFirst<br/><span>#</span>hookForm <span>#</span>contextApi <span>#</span>chakraUi <span>#</span>API</p>
            <video width="100%" src={Hamburkenzie} autoPlay loop muted />
              
            <ModalReadMe content={"API built with json-server. Fast food e-commerce application. Once registered and logged in, you can simply choose from the available products, add them to your cart, we accept credit/debit cards or pix, enter your address, and soon your order will be delivered to your doorstep."} title={"Hamburkenzie"}/>
          </div>

          <div>
          <a target="_blank" rel="noreferrer" href="https://lari-dev-quiz.vercel.app/">Dev Quiz</a>
            <p><span>#</span>React <span>#</span>CSS <span>#</span>JavaScript <span>#</span>mobileFirst<br/><span>#</span>react <span>#</span>axios<span> #</span>toastify</p>
            <video width="100%" src={quiz} autoPlay loop muted />
            
            <ModalReadMe content={"Quiz to test your technology knowledge!"} title={"Dev Quiz"}/>
          </div>
        
        </DivProjects>
        <DivProjects>
          <div>
           
            <a target="_blank" rel="noreferrer" href="https://lari-rock-paper-scissors.vercel.app/"> Rock, Paper, Scissor </a>
            <p><span>#</span>CSS<span> #</span>JavaScript Vanilla<span> #</span>mobileFirst<br/> <span> #</span>DOM Manipulation <span> #</span>HTML </p>
            <video width="100%" src={rockPaperScissor} autoPlay loop muted />
            <ModalReadMe content={"A simple and traditional game, made with pure JavaScript, HTML, and CSS, using DOM manipulation. The rules are: rock beats scissors, scissors beats paper, paper beats rock."} title={"Rock, Paper, Scissor"}/>
          </div>
                   
          <div>
            <a target="_blank" rel="noreferrer" href="https://react-entrega-s2-kenzie-hub-larissakoliveira.vercel.app/">KenzieHub</a>
            <p><span>#</span>React <span>#</span>JavaScript <span>#</span>mobileFirst<br/> <span>#</span>styled-component <span>#</span>yup <span>#</span>HTML <span>#</span>materialUi  </p>
            <video width="100%" src={kenzieHub} autoPlay loop muted />
            <ModalReadMe content={"An application for developers, which allows the user, after properly registering and logging in, to add/delete the technologies they are currently studying or have studied before, along with their proficiency level."} title={"KenzieHub"}/>
          </div>

        </DivProjects>
        <h1 className="subtitle"><span>&#60;h1&#62; </span> Team Projects <span>&#60;/h1&#62;</span></h1>
        <DivProjects>
          <div>
            <a target="_blank" rel="noreferrer" href="https://better-life-app.vercel.app/">BetterLifeApp</a>
            <p><span>#</span>mobileFirst <span>#</span>React <span>#</span>cz-conventional-changelog <br/> <span>#</span>react-google-charts <span>#</span>axios <span>#</span>API  </p>
            <video width="100%" src={betterLife} autoPlay loop muted />
            <ModalReadMe content={"Application built as a group project for managing healthy habits. With it, users can add new habits, set goals, and join groups with similar objectives. The documentation for the API used can be found at https://github.com/Kenzie-Academy-Brasil-Developers/habits-api" } title={"BetterLifeApp"}/>
          </div>
          <div>
            <a target="_blank" rel="noreferrer" href="https://cookin-receitas-afetivas.vercel.app/">Cookin'App</a>
            <p><span>#</span>React <span>#</span>mobileFirst <span>#</span>JavaScript <span>#</span>cypress <br/><span>#</span>jwt-decode <span>#</span>react-google-login <span>#</span>JSON-server  </p>
            <video width="100%" src={cookin} autoPlay loop muted />
            <ModalReadMe content={"The application, built as a group project, functions as a social network for sharing recipes. Users have the option to register more easily using their Google account, access all publicly available recipes, add their own recipes, and share them. The base URL for the API we created for the application is https://api-cookin.herokuapp.com."} title={"Cookin'App"}/>
          </div>
        </DivProjects>
        <h1 className="subtitle"><span>&#60;h1&#62; </span> Freelance <span>&#60;/h1&#62;</span></h1>
        <DivProjects>
          <div>
            <a target="_blank" rel="noreferrer" href="https://bee-app-lovat.vercel.app/">Bee App</a>
            <p><span>#</span>ContentFul <span>#</span>TypeScript <span>#</span>Reactjs <span>#</span>Nodejs <br/> <span>#</span>Webhook <span>#</span>Jest <span>#</span>NodeMailer <span>#</span>Tailwind </p>
            <video width="100%" src={beeApp} autoPlay loop muted />
            <ModalReadMe content={"This project was developed for a Dutch client who wanted a simple solution to automatically notify customers via email when a product was back in stock. The notifications are triggered when the client updates product availability in Contentful. Additionally, the system supports multiple languages, as requested." } title={"BeeApp"}/>
          </div>
        </DivProjects>
      </MainSection>
    </Flex>
  );
};
