import { useMemo, useContext } from 'react';

import { Card } from '../../components/Card';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Section } from '../../components/Section';

import alertsiteImage from '../../assets/images/alertsite.png';
import loadninjaImage from '../../assets/images/loadninja.png';
import qqSolutionsImage from '../../assets/images/qqsolutions.jpeg';
import springbigSubsImage from '../../assets/images/springbig_subs.png';
import spaceFlightNewsImage from '../../assets/images/spaceflight_news.png';

export const Projects = () => {
  const theme = useContext(ThemeContext);

  const projects = useMemo(() => [
    {
      id: 1,
      name: "Subscriptions by Springbig",
      technologies: "sdfsdfsdfd",
      image: springbigSubsImage,
      type: 'professional',
      website: "https://springbig.com/features/subscriptions/"
    },
    {
      id: 2,
      name: "LoadNinja",
      technologies: "xvcvcxc",
      image: loadninjaImage,
      type: 'professional',
      website: "https://loadninja.com/features/"
    },
    {
      id: 3,
      name: "AlertSite",
      technologies: "xvcvcxc",
      image: alertsiteImage,
      type: 'professional',
      website: "https://smartbear.com/product/alertsite/features/"
    },
    {
      id: 4,
      name: "QQSolutions Internal Tools",
      technologies: "xvcvcxc",
      image: qqSolutionsImage,
      type: 'professional',
      website: "https://www.linkedin.com/company/qq-solutions-inc/about/"
    },
    {
      id: 4,
      name: "Space Flight News React",
      technologies: "xvcvcxc",
      image: spaceFlightNewsImage,
      type: 'personal',
      website: "https://github.com/ctalave1/space-flight-news-react"
    }
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
            <p className="text-gray-400 mb-4">{project.technologies}</p>
            <a target="_blank" href={project.website} className={`inline-block bg-gradient-to-r ${theme.gradientColors} text-white px-4 py-2 rounded-full`} rel="noopener noreferrer">
              { project.type === 'professional' ? 'View Project' : 'View Project on Github' }
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
};