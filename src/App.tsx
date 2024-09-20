import './App.css';

import { NavBar } from './components/NavBar/NavBar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

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
