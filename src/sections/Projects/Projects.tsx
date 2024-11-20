import { useMemo, useContext } from 'react';

import { Card } from '../../components/Card';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Section } from '../../components/Section';

import alertsiteImage from '../../assets/images/alertsite.png';
import loadninjaImage from '../../assets/images/loadninja.png';
import qqSolutionsImage from '../../assets/images/qqsolutions.jpeg';
import springbigSubsImage from '../../assets/images/springbig_subs.png';
import spaceFlightNewsImage from '../../assets/images/spaceflight_news.png';
import portfolioSiteImage from '../../assets/images/portfolio_site.png';

import {
  FaVuejs,
  FaAngular,
  FaReact,
  FaAws,
  FaJava,
  FaNodeJs
} from "react-icons/fa6";
import { 
  SiCsharp, 
  SiRubyonrails, 
  SiPostgresql, 
  SiMicrosoftsqlserver, 
  SiTypescript,
  SiDotnet,
  SiMicrosoftazure
} from "react-icons/si";

export const Projects = () => {
  const theme = useContext(ThemeContext);

  const projects = useMemo(() => [
    {
      id: 1,
      name: "Subscriptions by Springbig",
      technologies: [
        <SiTypescript title="TypeScript"/>,
        <FaVuejs title="VueJS"/>,
        <SiRubyonrails title="Rails"/>,
        <SiPostgresql title="PostgreSQL"/>
      ],
      image: springbigSubsImage,
      type: 'professional',
      website: "https://springbig.com/features/subscriptions/",
      description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Montes himenaeos tellus tempus facilisi velit nulla, quam pellentesque. Nascetur porta gravida nullam condimentum vulputate curabitur iaculis efficitur tristique. Ad aliquam blandit rutrum maecenas felis; augue sem sem.'
    },
    {
      id: 2,
      name: "LoadNinja",
      technologies: [
        <FaReact title="React"/>,
        <FaNodeJs title="Node.js"/>,
        <FaAws title="Amazon Web Services"/>
      ],
      image: loadninjaImage,
      type: 'professional',
      website: "https://loadninja.com/features/",
      description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Montes himenaeos tellus tempus facilisi velit nulla, quam pellentesque. Nascetur porta gravida nullam condimentum vulputate curabitur iaculis efficitur tristique. Ad aliquam blandit rutrum maecenas felis; augue sem sem.'
    },
    {
      id: 3,
      name: "AlertSite",
      technologies: [
        <FaAngular title="Angular"/>,
        <FaJava title="Swing"/>
      ],
      image: alertsiteImage,
      type: 'professional',
      website: "https://smartbear.com/product/alertsite/features/",
      description: 'An API, application, and website monitoring platform maintained by SmartBear Software.'
    },
    {
      id: 4,
      name: "QQSolutions Internal Tools",
      technologies: [
        <FaAngular title="Angular" />,
        <SiCsharp title="C#" />,
        <SiDotnet title=".NET" />,
        <SiMicrosoftsqlserver title="Microsoft SQL Server" />,
        <SiMicrosoftazure title="Microsoft Azure Cloud" />
      ],
      image: qqSolutionsImage,
      type: 'professional',
      website: "https,//www.linkedin.com/company/qq-solutions-inc/about/",
      description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Montes himenaeos tellus tempus facilisi velit nulla, quam pellentesque. Nascetur porta gravida nullam condimentum vulputate curabitur iaculis efficitur tristique. Ad aliquam blandit rutrum maecenas felis; augue sem sem.'
    },
    {
      id: 5,
      name: "Space Flight News React",
      technologies: [
        <FaReact title="React" />,
        <SiTypescript title="TypeScript"/>
      ],
      image: spaceFlightNewsImage,
      type: 'personal',
      website: "https://github.com/ctalave1/space-flight-news-react",
      description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Montes himenaeos tellus tempus facilisi velit nulla, quam pellentesque. Nascetur porta gravida nullam condimentum vulputate curabitur iaculis efficitur tristique. Ad aliquam blandit rutrum maecenas felis; augue sem sem.'
    },
    {
      id: 6,
      name: "Online Resume/Portfolio Site",
      technologies: [
        <FaReact title="React" />,
        <SiTypescript title="TypeScript"/>,
        <FaNodeJs title="Node.js" />
      ],
      image: portfolioSiteImage,
      type: 'professional',
      website: "/",
      description: 'This website you\'re on right now! An online resume/ portfolio website I made to brush up on my React, Typescript and Node.js skills as well as to showcase my ability as a developer to anyone who may visit the site.'
    },
  ], []);

  const handleOpenImage = async (image: string) => {
    const response: Response = await fetch(image);

    const blob: Blob = await response.blob();

    const tempUrl: string = window.URL.createObjectURL(blob);

    window.open(tempUrl, '_blank');

    window.URL.revokeObjectURL(tempUrl);
  }

  return (
    <Section
      id="projects"
      twClasses={['py-20']}
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <Card
            key={project.id}
          >
            <a href="javascript:void(0);" onClick={() => handleOpenImage(project.image)}>
              <img src={project.image} alt="" className="rounded-lg mb-4 w-full h-48 object-fill" />
            </a>
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <h2 className="text-gray-400 flex space-x-1 my-4 md:my-2 items-center">
              <span className="font-bold">Technologies Used:</span>
              {project.technologies.map(technology => technology)}
            </h2>
            <p className="mb-3">{project.description}</p>
            <a target="_blank" href={project.website} className={`inline-block bg-gradient-to-r ${theme.gradientColors} text-white px-4 py-2 rounded-full`} rel="noopener noreferrer">
              { project.type === 'professional' ? 'View Project' : 'View Project on Github' }
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
};