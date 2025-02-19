import { useMemo, useContext, useCallback } from 'react';

import { Card } from '../../components/Card';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Section } from '../../components/Section';

import alertsiteImage from '../../assets/images/alertsite.png';
import loadninjaImage from '../../assets/images/loadninja.png';
import qqSolutionsImage from '../../assets/images/qqsolutions.jpeg';
import springbigImage from '../../assets/images/springbig.jpeg';
import springbigSubsImage from '../../assets/images/springbig_subs.png';
import spaceFlightNewsImage from '../../assets/images/spaceflight_news.png';
import portfolioSiteImage from '../../assets/images/portfolio_site.png';
import blogSiteImage from '../../assets/images/cjt-blog.png';

import { Project } from './types';

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
  SiMicrosoftazure,
  SiNextdotjs,
  SiPrisma
} from "react-icons/si";
import { Tooltip } from '@/components/Tooltip';

/**
 * Displays a list of projects with details such as technologies used, project description,
 * and links to project pages. Each project is displayed as a card with an option to view images.
 *
 * @component
 * @example
 * // Render the Projects section
 * <Projects />
 */
export const Projects = () => {
  const theme = useContext(ThemeContext);
  /**
   * List of projects to display on the page. This is memoized to optimize performance.
   *
   * @type {Project[]}
   * @returns {Project[]} List of Project objects.
   */
  const projects: Project[] = useMemo(() => [
    {
      id: 1,
      name: "Online Blog Site",
      technologies: [
        {
          tooltip: "React",
          element: <FaReact className="hover:text-gray-100" />
        },
        {
          tooltip: "TypeScript",
          element: <SiTypescript className="hover:text-gray-100" />
        },
        {
          tooltip: "Next.js",
          element: <SiNextdotjs className="hover:text-gray-100" />
        },
        {
          tooltip: "Prisma",
          element: <SiPrisma className="hover:text-gray-100" />
        }
      ],
      image: blogSiteImage,
      type: 'personal',
      website: 'https://cjt-blog.vercel.app/',
      description: 'A blog style website I made to continue my practice with React and Typescript and to begin familiarizing myself with Next.js. Built using Next.js\'s App Router and Prisma for storing information on user interactions with blog posts to see which are the most popular.'
    },
    {
      id: 2,
      name: "Online Resume/Portfolio Site",
      technologies: [
        {
          tooltip: "React",
          element: <FaReact className="hover:text-gray-100" />
        },
        {
          tooltip: "TypeScript",
          element: <SiTypescript className="hover:text-gray-100" />
        },
        {
          tooltip: "Node.js",
          element: <FaNodeJs className="hover:text-gray-100" />
        },
      ],
      image: portfolioSiteImage,
      type: 'personal',
      website: '',
      description: 'This website you\'re on right now! An online resume/ portfolio website I made to continue brushing up on my React, Typescript, Express, and Node.js skills as well as to showcase my ability as a developer to anyone who may visit the site.'
    },
    {
      id: 3,
      name: "Space Flight News React",
      technologies: [
        {
          tooltip: "React",
          element: <FaReact className="hover:text-gray-100" />
        },
        {
          tooltip: "TypeScript",
          element: <SiTypescript className="hover:text-gray-100" />
        }
      ],
      image: spaceFlightNewsImage,
      type: 'personal',
      website: 'https://space-flight-news-react-vert.vercel.app',
      description: 'An SPA that I worked on to help me brush up on React (Functional Components and React Hooks) and TypeScript. A simple SPA that displays articles fetched from Spaceflight News API. It has search bar functionality and each displayed article is a link that leads you to an article "page" for that article with a short summary.'
    },
    {
      id: 4,
      name: "Subscriptions by Springbig",
      technologies: [
        {
          tooltip: "TypeScript",
          element: <SiTypescript className="hover:text-gray-100" />
        },
        {
          tooltip: "VueJS",
          element: <FaVuejs className="hover:text-gray-100" />
        },
        {
          tooltip: "Rails",
          element: <SiRubyonrails className="hover:text-gray-100" />
        },
        {
          tooltip: "PostgreSQL",
          element: <SiPostgresql className="hover:text-gray-100" />
        }
      ],
      image: springbigSubsImage,
      type: 'professional',
      website: 'https://springbig.com/features/subscriptions/',
      description: 'A feature of the Springbig platform that I co-architected and oversaw the development for. A feature that is sold to Springbig client retailers that allows them to create subscription plans that offer VIP rewards and offers to their customer outside of the rewards and offers that they receive from retailers\' loyatly reward programs (also a Springbig feature).'
    },
    {
      id: 5,
      name: "Springbig AWS Infrastructure",
      technologies: [
        {
          tooltip: "TypeScript",
          element: <SiTypescript className="hover:text-gray-100" />
        },
        {
          tooltip: "Node.js",
          element: <FaNodeJs className="hover:text-gray-100" />
        },
        {
          tooltip: "Amazon Web Services",
          element: <FaAws className="hover:text-gray-100" />
        }
      ],
      image: springbigImage,
      type: 'professional',
      website: 'https://springbig.com/',
      description: 'One of the main responsibilities of the first team I was placed on when I first started at Springbig. While I also occasionally worked on tasks involing Rails development and AWS Lambda development, the main responsibility of the team was to develop Node.js scripts that leveraged AWS CDK to create new and modify existing deployment pipelines in AWS CodePipeline that provisioned AWS resources across multiple development environments.'
    },
    {
      id: 6,
      name: "LoadNinja",
      technologies: [
        {
          tooltip: "React",
          element: <FaReact className="hover:text-gray-100" />
        },
        {
          tooltip: "Node.js",
          element: <FaNodeJs className="hover:text-gray-100" />
        },
        {
          tooltip: "Amazon Web Services",
          element: <FaAws className="hover:text-gray-100" />
        }
      ],
      image: loadninjaImage,
      type: 'professional',
      website: 'https://loadninja.com/features/',
      description: 'SmartBear\'s first product to be developed in-house, of which I was a key contributor. A SaaS load testing platform for web apps/sites and APIs. Allows you to codelessly generate web apps/sites or API load testing scripts using the InstaPlay recorder. Use those scripts in a load test that plays back those scripts on real-time Chrome browser instances and get actionable insights via navigation timings, response times, and network data.'
    },
    {
      id: 7,
      name: "AlertSite",
      technologies: [
        {
          tooltip: "Angular",
          element: <FaAngular className="hover:text-gray-100" />
        },
        {
          tooltip: "Spring",
          element: <FaJava className="hover:text-gray-100" />
        }
      ],
      image: alertsiteImage,
      type: 'professional',
      website: 'https://smartbear.com/product/alertsite/features/',
      description: 'The first project that I contributed to at SmartBear. An API, application, and website monitoring platform. Allows clients to create monitors for your applications and APIs and view alerts and metrics when availability, performance, and functionality begin to have problems.'
    },
    {
      id: 8,
      name: "QQSolutions Internal Tools Site",
      technologies: [
        {
          tooltip: "Angular",
          element: <FaAngular className="hover:text-gray-100" />
        },
        {
          tooltip: "C#",
          element: <SiCsharp className="hover:text-gray-100" />
        },
        {
          tooltip: ".NET",
          element: <SiDotnet className="hover:text-gray-100" />
        },
        {
          tooltip: "Microsoft SQL Server",
          element: <SiMicrosoftsqlserver className="hover:text-gray-100" />
        },
        {
          tooltip: "Microsoft Azure Cloud",
          element: <SiMicrosoftazure className="hover:text-gray-100" />
        }
      ],
      image: qqSolutionsImage,
      type: 'unavailable',
      website: 'https://www.linkedin.com/company/qq-solutions-inc/about/',
      description: 'The internal tools site I worked on during my time as an intern at QQSolutions. The internal tools site (built using Angular on the frontend and C# on the backend) was used by product support department. This was not a public facing site, so I have no link for this project. The company no longer exists as its own entity, being acquired by Vertafore in 2015. Instead, I included the link to the QQSolutions LinkedIn profile, as it is still up.'
    },
  ], []);

  /**
   * Opens an image in a new browser tab when clicked.
   * This function fetches the image as a blob, creates an object URL, and opens it in a new tab.
   * 
   * @param {string} image - The URL of the image to be opened.
   * @returns {Promise<void>} A promise that resolves once the image is opened.
   */
  const handleOpenImage = useCallback(async (image: string) => {
    const response: Response = await fetch(image);

    const blob: Blob = await response.blob();

    const tempUrl: string = window.URL.createObjectURL(blob);

    window.open(tempUrl, '_blank');

    window.URL.revokeObjectURL(tempUrl);
  }, []);

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
            key={`proj-${project.id}`}
          >
            <div className="cursor-pointer" onClick={() => handleOpenImage(project.image)}>
              <img src={project.image} alt="" className="rounded-lg mb-4 w-full h-48 object-fill" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <h2 className="text-gray-400 flex space-x-1 my-4 md:my-2 items-center">
              <span className="font-bold">Technologies Used:</span>
              {project.technologies.map(technology => (
                <Tooltip text={technology.tooltip}>
                  {technology.element}
                </Tooltip>
              ))}
            </h2>
            <p className="mb-3">{project.description}</p>
            <a target="_blank" href={project.website} className={`inline-block bg-gradient-to-r ${theme.gradientColors} text-white px-4 py-2 rounded-full`} rel="noopener noreferrer">
              { project.type === 'professional' ? 'View Product' : ( project.type === 'unavailable' ? 'View Company LinkedIn' : 'View Project') }
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
};