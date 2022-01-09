import { DivAboutMe, MainDiv, MainDivLine, BlinkingCursor } from "./style";
import { Flex } from "@chakra-ui/react";

export const About = () => {
  return (
    <Flex id="aboutMe">
      <DivAboutMe>
        <h1 className="aboutMe">&lt;/sobre&gt;</h1>
        <MainDiv>
          <MainDivLine>
            <span className="numbers">01</span>
            <span className="blue">class </span>
            <span className="green">Larissa</span>{" "}
            <span className="yellow">&#123; </span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">02</span>
            <span className="comments">
              {" "}
              &#47;&#47;Sempre interessada em aprender novas tecnologias. :)
            </span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">03</span>
            <span className="comments">
              {" "}
              &#47;&#47;Disposta a aumentar cada dia mais hard e soft skills.{" "}
            </span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">04</span>
            <span className="yellowIndented">developer</span>
            <span className="purple">&#40;&#41; &#123;</span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">05</span>
            <span className="cyan">this</span>.
            <span className="lightBlue">name</span> =
            <span className="red"> "Larissa Oliveira"</span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">06</span>
            <span className="cyan">this</span>.
            <span className="lightBlue">city</span> =
            <span className="red"> "Rio de Janeiro - RJ"</span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">07</span>
            <span className="cyan">this</span>.
            <span className="lightBlue">email</span> =
            <span className="red"> "oliveir5uwm@gmail.com"</span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">08</span>
            <span className="purpleIndented">&#125; </span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">09</span>
            <span className="yellowIndented">workExperience</span>
            <span className="purple">&#40;&#41; &#123;</span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">10</span>
            <span className="purpleIndentedTwice">return </span>
            <span className="yellow">[</span>
          </MainDivLine>
          {/* <MainDivLine>
            <span className="numbers">09</span>
            <span className="yellowIndentedThrice">&#123;</span>
            <span className="red">
              "08/2016 - 12/2016": "Tradição Mineira Indústria - Estágio em
              Engenharia de Produção"
            </span>
            <span className="yellow">&#125;</span>,
          </MainDivLine> */}
          <MainDivLine>
            <span className="numbers">11</span>
            <span className="yellowIndentedThrice">&#123;</span>
            <span className="red">
              "02/2017 - 04/2017": "Pabú Izakaya - Auxiliar Administrativo"
            </span>
            <span className="yellow">&#125;</span>,
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">12</span>
            <span className="yellowIndentedThrice">&#123;</span>
            <span className="red">
              "05/2017 - 10/2018": "Colégio Marista - Auxiliar Administrativo"
            </span>
            <span className="yellow">&#125;</span>,
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">13</span>
            <span className="yellowIndentedThrice">&#123;</span>
            <span className="red">
              "04/2019 - 03/2020": "Eataly Paris - Recepcionista"
            </span>
            <span className="yellow">&#125;</span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">14</span>
            <span className="yellowIndentedTwice">]</span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">15</span>
            <span className="purpleIndented">&#125; </span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">16</span>
            <span className="yellowIndented">education</span>
            <span className="purple">&#40;&#41; &#123;</span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">17</span>
            <span className="purpleIndentedTwice">return </span>
            <span className="yellow">[</span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">18</span>
            <span className="yellowIndentedThrice">&#123;</span>
            <span className="red">
              "02/2011 - 12/2016": "Universidade do Estado de Minas Gerais -
              Engenharia de Produção"
            </span>
            <span className="yellow">&#125;</span>,
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">19</span>
            <span className="yellowIndentedThrice">&#123;</span>
            <span className="red">
              "05/2021 - now": "Kenzie Academy Brasil - Desenvolvedora Web
              FullStack"
            </span>
            <span className="yellow">&#125;</span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">20</span>
            <span className="yellowIndentedTwice">]</span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">21</span>
            <span className="purpleIndented">&#125; </span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">22</span>
            <span className="yellowIndented">exchange</span>
            <span className="purple">&#40;&#41; &#123;</span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">23</span>
            <span className="purpleIndentedTwice">return </span>
            <span className="yellow">[</span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">24</span>
            <span className="yellowIndentedThrice">&#123;</span>
            <span className="red">
              "08/2013 - 12/2015": "Graduação Sanduíche/Eng. de Produção -
              University of Wisconsin - Estados Unidos"
            </span>
            <span className="yellow">&#125;</span>,
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">25</span>
            <span className="yellowIndentedThrice">&#123;</span>
            <span className="red">
              "03/2019 - 03/2020": "Working Holiday - Paris/França"
            </span>
            <span className="yellow">&#125;</span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">26</span>
            <span className="yellowIndentedTwice">]</span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">27</span>
            <span className="purpleIndented">&#125; </span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">28</span>
            <span className="yellowIndented">skills</span>
            <span className="purple">&#40;&#41; &#123;</span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">29</span>
            <span className="purpleIndentedTwice">return </span>
            <span className="yellow"> [</span>
            <span className="red">
              "HTML","CSS","Javascript","React","Redux","Python","GIT","npm/yarn","Flask","Typescript"
            </span>
            <span className="yellow">]</span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">30</span>
            <span className="purpleIndented">&#125; </span>
          </MainDivLine>
          <MainDivLine>
            <span className="numbers">31</span>
            <span className="yellow">&#125; </span>
            <BlinkingCursor>
              {" "}
              <span>|</span>
            </BlinkingCursor>
          </MainDivLine>
        </MainDiv>
      </DivAboutMe>
    </Flex>
  );
};