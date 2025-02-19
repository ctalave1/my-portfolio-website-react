import { useContext } from 'react';

import AboutImage from '../../assets/images/about.jpg';

import { ThemeContext } from '../../contexts/ThemeContext';
import { Section } from '../../components/Section';


/**
 * The About section of the website that introduces me and outlines my professional background.
 * 
 * This component displays the my career journey, including my experience, projects I've worked on personally or contributed to professionally, and 
 * previous employers. It also showcases some key statistics, such as years of experience, projects completed, and 
 * number of employers I've worked for, all while utilizing the theme colors from the `ThemeContext`.
 * 
 * @function
 * @example
 * // Example usage of the About component:
 * <About />
 * 
 * @returns {JSX.Element} The About section UI, including a profile image, personal background, experience summary,
 * and key statistics.
 */
export const About = () => {
  const theme = useContext(ThemeContext);

  return (
    <Section
      id="about"
      twClasses={['py-20']}
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        About Me
      </h2>
      <div className="flex flex-col lg:flex-row items-center md:space-x-12">
        <img
          src={AboutImage}
          alt="About Me"
          className="w-72 h-80 rounded object-cover mb-8 lg:mb-0"
        />
        <div className="flex-1">
          <p className="text-base mb-2">
            I’m a Senior Full-Stack Developer based in Charlotte, North Carolina, with a passion for technology that started at the age of 6, when I first encountered computers using Windows 95 on a Compaq PC. This early curiosity sparked my lifelong journey in software development.
          </p>

          <p className="text-base mb-2">
            At 16, I began my foray into professional software development as an intern at QQSolutions, an insurance agency management software company that was based in Deerfield Beach, FL. There, I cut my teeth on Microsoft Access Forms and VBA, before expanding my skills into more robust technologies like Angular, C#, and Microsoft SQL Server.
          </p>

          <p className="text-base mb-2">
            Most recently, I had the privilege of leading a talented team of engineers at Springbig, a SaaS provider specializing in loyalty rewards and digital marketing for retailers. I oversaw the integration of our platform with various POS systems, helping merchants deliver targeted marketing campaigns and loyalty rewards to their customers. Additionally, I spearheaded the development of a subscription feature, enabling merchants to offer exclusive rewards and deals through custom subscription plans.
          </p>

          <p className="text-base mb-2">
            Before Springbig, I played a pivotal role as a Senior Software Engineer at SmartBear Software, contributing to the development of LoadNinja, a powerful SaaS load testing platform. As a key member of the original development team, I helped shape the product into a vital tool for performance testing.
          </p>

          <p className="text-base mb-2">
          Throughout my career, my focus has always been on creating meaningful, user-centric solutions that improve efficiency and simplify lives. Whether through small enhancements or large-scale projects, I’m dedicated to driving innovation and delivering value through thoughtful, high-quality software.
          </p>

          <div className="mt-4 flex justify-between text-center">
            <div>
              <h3 className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b ${theme.gradientColors}`}>
                10
              </h3>
              <p>Years Experience</p>
            </div>
            <div>
              <h3 className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b ${theme.gradientColors}`}>
                8
              </h3>
              <p>Projects Completed or Contributed To</p>
            </div>

            <div>
              <h3 className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b ${theme.gradientColors}`}>
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