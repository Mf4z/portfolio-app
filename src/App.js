import About from "./pages/About";
import Work from "./pages/Work";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import TechNews from "./pages/TechNews";
import { ThemeProvider } from "./context/ThemeContext";
import Testimonials from "./pages/Testimonials";

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
        {/* <Testimonials /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
