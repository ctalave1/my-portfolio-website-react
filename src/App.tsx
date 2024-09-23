import './App.css';

import { GradientColorsContext } from './contexts/GradientColorsContext';

import { NavBar } from './components/NavBar/NavBar';
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { Background } from './components/Background';

const App = () => {
  return (
    <GradientColorsContext.Provider value="from-yellow-400 to-blue-600">
      <NavBar />
      <div className="relative w-full h-full">
        <div className="relative z-10">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
        <Background />
      </div>
    </GradientColorsContext.Provider>
  );
}

export default App
