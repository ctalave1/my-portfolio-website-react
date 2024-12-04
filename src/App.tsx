import './App.css';

import { ThemeContext, theme } from './contexts/ThemeContext';

import { NavBar } from './components/NavBar/NavBar';
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { Background } from './components/Background';

/**
 * The root component that renders the entire application layout.
 * 
 * The `App` component serves as the container for the main sections of the site, including navigation, 
 * section content, and background animations. It also provides the theme context to all child components 
 * using the `ThemeContext.Provider`.
 * 
 * @function
 * @example
 * // Example usage of the App component:
 * <App />
 * 
 * @returns {JSX.Element} The root structure of the app, including sections, navigation, and background.
 */
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
};

export default App;
