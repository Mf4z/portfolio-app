import About from "./pages/About";
import Work from "./pages/Work";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import TechNews from "./pages/TechNews";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <About />
        <Skills />
        <Work />
        <Contact />
        <TechNews />
      </ThemeProvider>
    </div>
  );
}

export default App;
