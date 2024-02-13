import Header from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import GlobalStyle from "./GlobalStyles";
import { Projects } from "./components/Projects";
import { Contacts } from "./components/Contacts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
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
      <Header />
      <Home />
      <Projects />
      <About />
      <Contacts />
    </>
  );
}

export default App;
