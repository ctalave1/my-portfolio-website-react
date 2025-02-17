import { useContext, useMemo } from "react";

import QQSolutionsLogo from '../../assets/images/qqsolutions.jpeg';
import SmartBearLogo from '../../assets/images/smartbear.jpeg';
import SpringbigLogo from '../../assets/images/springbig.jpeg';

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
  SiVisualbasic
} from "react-icons/si";

import { Section } from "../../components/Section";
import { Card } from "../../components/Card";
import { ThemeContext } from "../../contexts/ThemeContext";

import { Employer } from "./types";
import { Tooltip } from "@/components/Tooltip";

/**
 * The `Experience` component renders a section that displays professional experience in the form of cards. 
 * Each card represents a job or internship held at an employer, detailing the name of the company, 
 * the job title, start and end dates, technologies used, key responsibilities, and a link to the employer's 
 * LinkedIn profile.
 * 
 * @function
 * @example
 * // Example usage of the Experience component:
 * <Experience />
 * 
 * @returns {JSX.Element} A section element containing experience cards for each employer.
 */
export const Experience = () => {
  const theme = useContext(ThemeContext);
  
  /**
   * A list of employers with their respective job details, technologies, descriptions, and LinkedIn URLs. 
   * Memoized to avoid unnecessary recalculations during re-renders.
   * 
   * @type {Employer[]}
   * @constant
   */
  const employers: Employer[] = useMemo(() => [
    {
      id: 1,
      name: 'Springbig',
      image: SpringbigLogo,
      startDate: 'Oct 2021',
      endDate: 'Aug 2024',
      technologies: [
        {
          tooltip: "Node.js",
          element: <FaNodeJs className="hover:text-gray-100" />
        },
        {
          tooltip: "TypeScript",
          element: <SiTypescript className="hover:text-gray-100" />
        },
        {
          tooltip: "Amazon Web Services",
          element: <FaAws className="hover:text-gray-100" />
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
      description: [
        {
          title: 'Software Engineering Manager / Engineer',
          responsibilities: [
            'Led the integration of our platform (Vue.js, Tailwind CSS, Rails, AWS Lambda, PostgreSQL) with third-party POS providers, enabling seamless cross-communication of customer information, transactions, visits, and merchant product data, while empowering merchants to send targeted marketing campaigns to customers.',
            'Co-architected, managed, and helped develop the subscription service (Vue.js, Tailwind CSS, Rails, AWS Lambda, PostgreSQL) that is integrated with payment gateway(s), allowing merchants to create paid subscription plans. This service provided customers with exclusive rewards and deals, while generating a new revenue stream through profit-sharing agreements with clients.',
            'Managed and helped with the development of a service allowing merchants to offer digital gift cards (through an integration with Birchmount) that a customer can purchase and load using loyalty points or a payment card and use it to make purchases at a merchant’s store or send it as a gift to a friend (Vue.js, Tailwind CSS, Rails, AWS Lambda, PostgreSQL). This allows merchant customers more flexibility in how they purchase products at a store, increasing customer retention.',
            'Enhanced the bonus loyalty points feature of the platform to allow merchants to set a date range (based on merchant’s saved time zone) for when conditions for loyalty point multipliers/enhancers (Vue.js, Tailwind CSS, Rails, PostgreSQL) take effect. This ends the need for merchants to manually go into their account and disable a condition when it no longer needs to be applied to customer purchases/visits.',
            'Reviewed and approved developers\' PR\'s (Pull Requests), ensuring code quality and adherence to standards. Resolved roadblocks by offering technical insights, collaborating with product teams for clarifications, and coordinating with other team leads to facilitate knowledge sharing.'
          ]
        },
        {
          title: 'Software Engineer',
          responsibilities: [
            'Contributed to a specialized development team tasked with solving complex issues, primarily in AWS and occasionally in Rails backend, that other teams lacked the expertise to address.',
            'Enhanced the company\'s AWS infrastructure by developing and modifying deployment pipelines in AWS CodePipeline, utilizing Node.js and TypeScript, for AWS Lambda, EventBridge, Systems Manager, IAM, and other AWS service resources, leveraging AWS CDK for resource provisioning.',
            'Developed an AWS Lambda function (microservice) triggered by a daily EventBridge rule to import BlueConic CDP customer segments from an S3-hosted CSV file. This data (millions of records) was processed in batches via workers, for targeted marketing campaigns.',
            'Automated the migration of Postgres tables to AWS Redshift by creating deployment pipelines for AWS Glue resources and writing Python scripts for AWS Glue jobs. Personally oversaw the migration of approximately 30 tables to multiple new development environments on AWS.'
          ]
        }
      ],
      linkedIn: "https://www.linkedin.com/company/springbig-inc-/about/"
    },
    {
      id: 2,
      name: 'SmartBear',
      image: SmartBearLogo,
      startDate: 'Mar 2017',
      endDate: 'Sept 2021',
      technologies: [
        {
          tooltip: "Angular",
          element: <FaAngular className="hover:text-gray-100" />
        },
        {
          tooltip: "Spring",
          element: <FaJava className="hover:text-gray-100" />
        },
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
      description: [
        {
          title: 'Senior Software Engineer',
          responsibilities: [
            'Developed, validated, and debugged front-end (AngularJS 1.x) and backend (Java) code for AlertSite, an API, application, and website monitoring web platform.',
            'Helped found LoadNinja, a leading load testing SaaS web platform, from the ground up. Developed using React (front-end), AWS, and Node.js (back-end) and allows for the visual recording of load testing scripts, without writing code, and running load tests, all using real Chrome browsers.',
            'Developed the functionality (Node.js, Express) of the LoadNinja recorder that allows for the visual recording of load testing scripts, generated as a Mocha script in real-time, by exposing to the end user an active, graphical instance of a headless chrome browser, shown via frames of the browser GUI sent over WebSocket and controlled by Chrome DevTools Protocol to allow for the automation of user actions on the browser, running on an EC2 instance and for the visual replay of the recorder-generated Mocha script.',
            'Developed the logic for correctly and equally distributing load test virtual users across multiple EC2 instances, spun up for a load test using the scripts, regions and proportions specified by the end user, via an AWS Lambda microservice written in Node.js.',
            'Developed AWS Lambda microservice, written in Node.js, that allows for the saving of a recording of a failed load test script iteration using FFMPEG as a layer in the Lambda function to piece together the gathered image frames of the script iteration playback into a single video which is then saved to S3 so that the user may view the video in their load test report, after the load test has completed.',
            'Helped mentor new team members and helped them get familiar with the codebase.',
            'Worked with team lead to figure out the feasibility of and architect new features using personal overall knowledge of the LoadNinja platform.',
            'Worked with customer support, and at times directly with customers, to help identify and fix individual or overall platform issues.'
          ]
        }
      ],
      linkedIn: "https://www.linkedin.com/company/smartbear/about/"
    },
    {
      id: 3,
      name: 'QQSolutions / Vertafore',
      image: QQSolutionsLogo,
      startDate: 'May 2010',
      endDate: 'Dec 2016',
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
        },
        {
          tooltip: "Visual Basic for Applications",
          element: <SiVisualbasic className="hover:text-gray-100" />
        }
      ],
      description: [
        {
          title: 'Intern Software Developer',
          responsibilities: [
            'Developed, validated, and debugged front-end (HTML, CSS, JS [AngularJS 1.X]) and back- end (.NET) code for internal tools website used by Product Support.',
            'Developed, validated, and debugged Windows Form tools written in C#.',
            'Reviewed, analyzed, and modified the VBA source code and layout of Microsoft Access Forms.'
          ]
        }
      ],
      linkedIn: "https://www.linkedin.com/company/qq-solutions-inc/about/"
    }
  ], []);
  return (
    <Section
      id="experience"
      twClasses={['py-20']}
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Experience
      </h2>
      <div className="grid grid-cols-1 gap-8">
        {employers.map(employer => (
          <Card
            key={`employer-${employer.id}`}
          >
            <img src={employer.image} alt="employer logo" className="rounded-lg mb-4 w-full h-64 object-scale-down" />
            <h3 className="text-2xl font-bold">{employer.name}</h3>
            <h3 className="text-2xl font-bold mb-2">{employer.startDate} - {employer.endDate}</h3>
            <h2 className="text-gray-400 flex space-x-1 my-4 md:my-2 items-center">
              <span className="font-bold">Technologies Used:</span>
              {employer.technologies.map((technology) => (
                <Tooltip text={technology.tooltip}>
                  {technology.element}
                </Tooltip>
              ))}
            </h2>
            {employer.description.map(d => (
              <>
                <h1 className="font-bold mb-2">{d.title}</h1>
                <ul>
                  {d.responsibilities.map((bullet, idx) => (
                    <li key={`employer-${employer.id}-resp-${idx}`} className={`${idx === d.responsibilities.length - 1 ? 'mb-2' : 'mb-1'} ml-4 list-disc`}>{bullet}</li>
                  ))}
                </ul>
              </>
            ))}
            <a target="_blank" href={employer.linkedIn} className={`inline-block bg-gradient-to-r ${theme.gradientColors} text-white px-4 py-2 rounded-full`} rel="noopener noreferrer">View on LinkedIn</a>
          </Card>
        ))}
      </div>
    </Section>
  );
}