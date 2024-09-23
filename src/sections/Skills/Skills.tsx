import { useMemo, useContext } from 'react';

import { Card } from '../../components/Card';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Section } from '../../components/Section';

export const Skills = () => {
  const theme = useContext(ThemeContext);

  const skills = useMemo(() => [
    {
      id: 1,
      title: 'Frontend Development',
      description: "Building responsive and interactive user interfaces.",
    },
    {
      id: 2,
      title: 'Backend Development',
      description: "Developing robust server-side logic and databases.",
    },
    {
      id: 3,
      title: 'Full-Stack Development',
      description: "Combining both frontend and backend development skills.",
    }
  ], []);

  return (
    <Section
      id="skills"
      twClasses={['py-20']}
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        My Skills
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
            <p className="mt-2 text-gray-300">
              {service.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
};