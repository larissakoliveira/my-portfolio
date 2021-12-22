import { AboutMeLines } from "../AboutMeLines"
import { DivAboutMe, MainDiv } from "./style"

export const About = () => {
    return (
        <DivAboutMe>
          <h1 id='aboutMe'>&lt;/sobre&gt;</h1>
          <MainDiv>
          <AboutMeLines>Larissa</AboutMeLines>
            <h1>Lorem ipsum dolor sit</h1>
            <p>Lorem ipsum dolor sit</p>
            <h1>Lorem ipsum dolor sit</h1>
            <p>Lorem ipsum dolor sit</p>
          </MainDiv>
        </DivAboutMe>
    )
}   
