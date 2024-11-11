import { useMemo, useContext } from 'react';

import {
  FaHtml5,
  FaCss3Alt,
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
  SiTypescript
} from "react-icons/si";

import { Card } from '../../components/Card';
import { ProgressBar } from '../../components/ProgressBar';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Section } from '../../components/Section';

export const Skills = () => {
  const theme = useContext(ThemeContext);

  const skills = useMemo(() => [
    {
      id: 1,
      title: 'Frontend Development',
      description: "Building responsive and interactive user interfaces.",
      technologies: [
        {
          id: 1,
          label: <FaHtml5 />,
          title: 'HTML',
          htmlId: 'html',
          progress: 3.5/5
        },
        {
          id: 2,
          label: <FaCss3Alt />,
          title: 'CSS',
          htmlId: 'css',
          progress: 3.5/5
        },
        {
          id: 3,
          label: <FaReact />,
          title: 'React',
          htmlId: 'react',
          progress: 4/5
        },
      ]
    },
    {
      id: 2,
      title: 'Backend Development',
      description: "Developing robust server-side logic and databases.",
      technologies: [
        {
          id: 1,
          label: <FaNodeJs />,
          title: 'Node.js',
          htmlId: 'nodejs',
          progress: 5/5
        },
        {
          id: 2,
          label: <SiPostgresql />,
          title: 'PostgreSQL',
          htmlId: 'postgresql',
          progress: 4/5
        },
        {
          id: 3,
          label: <FaAws />,
          title: 'Amazon Web Services',
          htmlId: 'aws',
          progress: 5/5
        },
      ]
    },
    {
      id: 3,
      title: 'Full-Stack Development',
      description: "Both frontend and backend development skills.",
      technologies: [
        {
          id: 1,
          label: <strong>FE</strong>,
          title: 'Frontend',
          htmlId: 'frontend',
          progress: 3.7/5
        },
        {
          id: 2,
          label: <strong>BE</strong>,
          title: 'Backend',
          htmlId: 'backend',
          progress: 4.6/5
        },
        {
          id: 3,
          label: <SiTypescript />,
          title: 'TypeScript',
          htmlId: 'typescript',
          progress: 4/5
        },
      ]
    }
  ], []);

  return (
    <Section
      id="skills"
      twClasses={['py-20']}
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map(service => (
          <Card key={service.id}>
            <div className={`text-left text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b ${theme.gradientColors}`}>
              {service.id}
            </div>
            <h3 className={`mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${theme.gradientColors}`}>
              {service.title}
            </h3>
            <p className="mt-2 mb-6 text-gray-300">
              {service.description}
            </p>
            <div className="flex flex-col space-y-4">
            {service.technologies.map(technology => (
              <div key={technology.id} className="flex items-center">
                <label htmlFor={technology.htmlId} title={technology.title} className="w-1/10">
                  {technology.label}
                </label>
                <ProgressBar
                  id={technology.htmlId}
                  progress={technology.progress}
                />
              </div>
            ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};