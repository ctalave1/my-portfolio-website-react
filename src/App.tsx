import './App.css';

import { NavBar } from './components/NavBar/NavBar';
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

const App = () => {
  return (
    <>
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
        <div className="stars"></div>
        <div className="twinkling"></div> 
        <div className="clouds"></div>
      </div>
    </>
  );
  // return (
  //   <div className="bg-black">
  //     <NavBar />
  //     <Home />
  //     <About />
  //     <Services />
  //     <Projects />
  //     <Contact />
  //     <Footer />
  //   </div>
  // );
}

export default App
