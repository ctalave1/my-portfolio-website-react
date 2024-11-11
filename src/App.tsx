import './App.css';

import { ThemeContext, theme } from './contexts/ThemeContext';

import { NavBar } from './components/NavBar/NavBar';
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { Background } from './components/Background';
import { Experience } from './sections/Experience';

const App = () => {
  return (
    <ThemeContext.Provider value={theme}>
      <NavBar />
      <div className="relative w-full h-full">
        <div className="relative z-10">
          <Home />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
        <Background />
      </div>
    </ThemeContext.Provider>
  );
}

export default App
