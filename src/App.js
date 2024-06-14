import About from "./pages/About";
import Work from "./pages/Work";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
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
      </ThemeProvider>
    </div>
  );
}

export default App;
