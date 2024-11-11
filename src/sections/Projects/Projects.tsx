import { useMemo, useContext } from 'react';

import projectImage from '../../assets/images/profile.jpeg';
import { Card } from '../../components/Card';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Section } from '../../components/Section';

export const Projects = () => {
  const theme = useContext(ThemeContext);

  const projects = useMemo(() => [
    {
      id: 1,
      name: "adfsgdsgfsdf",
      technologies: "sdfsdfsdfd",
      image: projectImage,
      github: "https://github.com/ctalave1"
    },
    {
      id: 2,
      name: "fdsfsd",
      technologies: "xvcvcxc",
      image: projectImage,
      github: "https://github.com/ctalave1"
    }
  ], []);

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
            <img src={project.image} alt="" className="rounded-lg mb-4 w-full h-48 object-cover" />
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="text-gray-400 mb-4">{project.technologies}</p>
            <a target="_blank" href={project.github} className={`inline-block bg-gradient-to-r ${theme.gradientColors} text-white px-4 py-2 rounded-full`} rel="noopener noreferrer">View on Github</a>
          </Card>
        ))}
      </div>
    </Section>
  );
};