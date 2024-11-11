import { useContext } from 'react';

import AboutImage from '../../assets/images/about.jpg';

// import { ProgressBar } from '../../components/ProgressBar';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Section } from '../../components/Section';

export const About = () => {
  const theme = useContext(ThemeContext);

  // const technologies = useMemo(() => [
  //   {
  //     id: 1,
  //     name: 'HTML & CSS',
  //     htmlId: 'htmlandcss',
  //     progress: 2.5/5
  //   },
  //   {
  //     id: 2,
  //     name: 'Node.js',
  //     htmlId: 'nodejs',
  //     progress: 2.5/5
  //   },
  //   {
  //     id: 3,
  //     name: 'React',
  //     htmlId: 'react',
  //     progress: 2.5/5
  //   },
  // ], []);

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
          alt="About Me"
          className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
        />
        <div className="flex-1">
          <p className="text-base mb-2">
            Hello! I am a Senior Full-Stack Developer currently residing in Charlotte, North Carolina.
          </p>

          <p className="text-base mb-2">
            I've been interested in computers since I was 6 and I had my first experience with computers using Windows 95 on a Compaq PC.
          </p>

          <p className="text-base mb-2">
          Most recently I led a team of software engineers at Springbig, a loyalty reward and digital marketing software provider, that sells its SaaS platform to retailers.

          The team that I led was in charge of integrating the platform with the different POS providers that client merchants use, to better market their products and sales to their customers, while also allowing them to provide loyalty reward programs to them, as well.

          While I was there, I have also oversaw the development of a subscription feature that is sold to merchants, so that they can create subscription plans to which their customers can subscribe to to get exclusive rewards and deals, separate from their loyalty reward program offerings.
          </p>

          <p className="text-base mb-2">
            Prior to Springbig, I was involved in full-stack web development as a Senior Software Engineer working on LoadNinja, a load testing platform offered by SmartBear Software, of which I was a key contributor and member of the original development team. 
          </p>

          <p className="text-base mb-2">
            I want to be able to help make the lives of other people easier through my contributions, be they small or big, to the field of software development.
          </p>

          {/* <div className="space-y-4">
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
          </div> */}

          <div className="mt-4 flex justify-between text-center">
            <div>
              <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b ${theme.gradientColors}`}>
                10
              </h3>
              <p>Years Experience</p>
            </div>
            <div>
              <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b ${theme.gradientColors}`}>
                10
              </h3>
              <p>Projects Completed or Contributed To</p>
            </div>

            <div>
              <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b ${theme.gradientColors}`}>
                3
              </h3>
              <p>Happy Employers</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}