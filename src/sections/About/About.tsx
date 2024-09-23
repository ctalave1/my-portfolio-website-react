import { useContext, useMemo } from 'react';

import AboutImage from '../../assets/images/profile.jpeg';

import { ProgressBar } from '../../components/ProgressBar';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Section } from '../../components/Section';

export const About = () => {
  const theme = useContext(ThemeContext);

  const technologies = useMemo(() => [
    {
      id: 1,
      name: 'HTML & CSS',
      htmlId: 'htmlandcss',
      progress: 2.5/5
    },
    {
      id: 2,
      name: 'Node.js',
      htmlId: 'nodejs',
      progress: 2.5/5
    },
    {
      id: 3,
      name: 'React',
      htmlId: 'react',
      progress: 2.5/5
    },
  ], []);

  return (
    <Section
      id="about"
      twClasses={['py-20']}
    >
      <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-base mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </p>

            <div className="space-y-4">
              {technologies.map(technology => (
                <div key={technology.id} className="flex items-center">
                  <label htmlFor={technology.htmlId} className="w-2/12">
                    {technology.name}
                  </label>
                  <ProgressBar
                    id={technology.htmlId}
                    progress={technology.progress}
                  />
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-between text-center">
              <div>
                <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b ${theme.gradientColors}`}>
                  10
                </h3>
                <p>Years experience</p>
              </div>
              <div>
                <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b ${theme.gradientColors}`}>
                  X
                </h3>
                <p>Projects Completed</p>
              </div>

              <div>
                <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b ${theme.gradientColors}`}>
                  Y
                </h3>
                <p>Happy Employers</p>
              </div>
            </div>
          </div>
        </div>
    </Section>
  )
}