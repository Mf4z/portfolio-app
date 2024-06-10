import About from "./pages/About";
import Work from "./pages/Work";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <About></About>
      <Skills></Skills>
      <Work />
      <Contact />
    </div>
  );
}

export default App;
