import { DivProjects, DivProfessionalWork, MainSection } from "./style";
import cookin from "../../assets/Video/cookin.mp4";
import kenzieHub from "../../assets/Video/kenzieHub.mp4";
import quiz from "../../assets/Video/quiz.webm";
import betterLife from "../../assets/Video/better-life.mp4";
import rockPaperScissor from "../../assets/Video/rock-paper-scissor.mp4";
import Hamburkenzie from "../../assets/Video/hamburgueria.webm"; 
import beeApp from "../../assets/Video/bee-app.mp4";
import anaCarolWebsite from "../../assets/Images/ana-carol-website.png";
import { Flex } from "@chakra-ui/react";
import ModalReadMe from "../ModalReadMe";

export const Projects = () => {
  return (
    <Flex id="projects">
      <MainSection>
        <h1 className="projects">&lt;/projects&gt;</h1>

        <h1 className="subtitle"><span>&#60;h1&#62;</span> Professional Work <span>&#60;/h1&#62;</span></h1>
        <DivProfessionalWork>
          <div>
            <h2 className="card-title">Next-Gen Learning Management System</h2>
            <p className="role">Hashtag Treinamentos · Frontend Developer · 2025 – Present</p>
            <p>
              <span>#</span>React <span>#</span>TypeScript <span>#</span>Tailwind <span>#</span>Storybook <span>#</span>NestJS<br/>
              <span>#</span>Playwright <span>#</span>Cucumber <span>#</span>WebSockets <span>#</span>AWS <span>#</span>Terraform
            </p>
            <ModalReadMe
              title={"LMS Platform — Hashtag Treinamentos"}
              content={
                "Contributing to a next-generation LMS replacing a legacy Bubble platform with a scalable monorepo architecture (student portal, admin, shared UI, and backend). Key contributions include: student-facing experiences (course navigation, enrollments, certificates, lesson progression, gamification), a reusable component library and design system in Storybook, real-time collaboration via WebSockets (live presence and reply-in-progress indicators for Q&A), admin tools for content management and course configuration, full-stack work with NestJS and third-party integrations (Calendly), E2E/BDD test suites with Playwright and Cucumber, and production delivery via AWS Amplify, GitHub Actions CI/CD, and Terraform-managed infrastructure."
              }
            />
          </div>
          <div>
            <h2 className="card-title">Enterprise E-commerce & Internal Tools</h2>
            <p className="role">McFadyen Digital · Full Stack Developer · 2022 – 2025</p>
            <p>
              <span>#</span>Magento <span>#</span>React <span>#</span>Angular <span>#</span>Next.js <span>#</span>Node.js<br/>
              <span>#</span>Tailwind <span>#</span>PHP <span>#</span>NewRelic <span>#</span>Splunk
            </p>
            <ModalReadMe
              title={"FedEx E-commerce — McFadyen Digital"}
              content={
                "Developed and maintained customer-facing features for the FedEx website using Magento, JavaScript, and PHP. Built internal web applications with React, Angular, Next.js, Node.js, and Tailwind CSS. Investigated and resolved production issues using New Relic, Splunk, and browser developer tools. Collaborated with cross-functional teams across two role levels — Junior (Jul 2022 – Oct 2023) and Mid-level (Oct 2023 – Mar 2025) — delivering platform improvements at scale."
              }
            />
          </div>
          <div>
            <h2 className="card-title">Developer Mentorship Program</h2>
            <p className="role">Kenzie Academy Brasil · Junior Developer Mentor · Feb 2022 – Jul 2022</p>
            <p>
              <span>#</span>JavaScript <span>#</span>HTML5 <span>#</span>CSS <span>#</span>React <span>#</span>Node.js<br/>
              <span>#</span>Code Reviews <span>#</span>Mentoring <span>#</span>Debugging <span>#</span>Technical Guidance
            </p>
            <ModalReadMe
              title={"Junior Developer Mentor — Kenzie Academy Brasil"}
              content={
                "Part-time mentorship role supporting software development students at Kenzie Academy Brasil. Mentored students through code reviews, debugging sessions, and technical guidance. Helped learners overcome coding challenges and deepen their understanding of key concepts. Provided feedback and grading to drive continuous improvement in students' code quality and problem-solving skills."
              }
            />
          </div>
        </DivProfessionalWork>

        <h1 className="subtitle"><span>&#60;h1&#62;</span> Freelance <span>&#60;/h1&#62;</span></h1>
        <DivProjects>
          <div>
            <a target="_blank" rel="noreferrer" href="https://www.anacaroltoledo.com.br/">Therapy &amp; Astrology Website</a>
            <p><span>#</span>Next.js <span>#</span>TypeScript <span>#</span>SCSS Modules <span>#</span>WordPress <br/> <span>#</span>Vercel <span>#</span>Google Analytics <span>#</span>WhatsApp <span>#</span>mobileFirst </p>
            <img width="100%" src={anaCarolWebsite} alt="Ana Carolina Toledo — Therapy and Astrology Website homepage" />
            <ModalReadMe
              title={"Ana Carolina Toledo — Therapy & Astrology Website"}
              content={
                "Co-developed a professional website for Ana Carolina Toledo, a Jungian therapist and astrologist based in Niterói, RJ. The site serves as a digital presence for her practice, allowing visitors to learn about services, explore content, and contact her via WhatsApp. Developed as a two-person team, with involvement across planning, design, implementation, testing, and deployment. Features include a responsive mobile-first experience, service presentation pages, FAQ sections, WhatsApp integration, social media links, and analytics tracking. Implemented a headless WordPress CMS architecture for user-friendly content management, article management, API integrations, reusable UI components, and a shared design system with SCSS modules. Followed Git best practices with feature branches and pull requests, preview environments, and deployment through Vercel. Tech stack: Next.js, TypeScript, SCSS Modules, WordPress REST API, Vercel, Google Analytics."
              }
            />
          </div>
          <div>
            <a target="_blank" rel="noreferrer" href="https://bee-app-lovat.vercel.app/">Bee App</a>
            <p><span>#</span>Contentful <span>#</span>TypeScript <span>#</span>React <span>#</span>Node.js <br/> <span>#</span>Webhook <span>#</span>Jest <span>#</span>NodeMailer <span>#</span>Tailwind </p>
            <video width="100%" src={beeApp} autoPlay loop muted />
            <ModalReadMe content={"Developed for a Dutch client: a solution to automatically notify customers via email when a product was back in stock. Notifications are triggered when the client updates product availability in Contentful, with multi-language support." } title={"Bee App"}/>
          </div>
        </DivProjects>

        <h1 className="subtitle"><span>&#60;h1&#62;</span> Individual Projects <span>&#60;/h1&#62;</span></h1>
        <DivProjects>
          <div>
            <a target="_blank" rel="noreferrer" href="https://lari-burguerkenzie.vercel.app/">Ecommerce HamburKenzie</a>
            <p><span>#</span>React <span>#</span>Typescript <span>#</span>JSON-server <span>#</span>Stripe <span>#</span>mobileFirst<br/><span>#</span>hookForm <span>#</span>contextApi <span>#</span>chakraUi <span>#</span>API</p>
            <video width="100%" src={Hamburkenzie} autoPlay loop muted />
              
            <ModalReadMe content={"API built with json-server. Fast food e-commerce application. Once registered and logged in, you can simply choose from the available products, add them to your cart, we accept credit/debit cards or pix, enter your address, and soon your order will be delivered to your doorstep."} title={"HamburKenzie"}/>
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
      </MainSection>
    </Flex>
  );
};
