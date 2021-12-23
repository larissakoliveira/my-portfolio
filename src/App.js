import Header from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import GlobalStyle from './GlobalStyles';
import sample from './Video/code-coding.mp4';
import { Projects } from "./components/Projects";


function App() {
  return (
    <>
    <GlobalStyle />
    <video width='100%' src={sample} autoPlay loop muted/>
      <Header/>
      <Home/>
      <Projects/>
      <About />
   </>
  );
}

export default App;