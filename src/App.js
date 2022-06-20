import Header from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import GlobalStyle from "./GlobalStyles";
import codingBackground from "./assets/Video/code-coding.mp4";
import { Projects } from "./components/Projects";
import { Contacts } from "./components/Contacts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const videoStyle = {
    width: "100%",
    height: "700px",
    alignItems: "center",
  };
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        type="sucess"
        rtl={false}
        pauseOnFocusLoss
        theme="colored"
        draggable
        pauseOnHover
      />
      <GlobalStyle />
      <video style={videoStyle} src={codingBackground} autoPlay loop muted />
      <Header />
      <Home />
      <Projects />
      <About />
      <Contacts />
    </>
  );
}

export default App;
