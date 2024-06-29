import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <BrowserRouter>
      <ThemeProvider>
        <div>
          <Routes>
            <Route
              index
              element={
                <>
                  <Navbar />
                  <About />
                  <Skills />
                  <Work />
                  <Contact />
                </>
              }
            ></Route>
            <Route path="/news" element={<TechNews />}>
              <TechNews />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
