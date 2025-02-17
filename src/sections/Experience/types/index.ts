/**
 * Type definition for a job description in an employer's experience.
 * This includes the job title and a list of key responsibilities associated with the position.
 *
 * @typedef {Object} JobDescription
 * @property {string} title - The title of the job or role.
 * @property {string[]} responsibilities - An array of responsibilities for the given role.
 */
type JobDescription = {
  title: string;
  responsibilities: string[];
};

/**
 * Type definition for an employer's experience entry.
 * This represents a single employer, including details about the company, 
 * job roles held, technologies used, and a link to their LinkedIn profile.
 *
 * @typedef {Object} Employer
 * @property {number} id - A unique identifier for the employer.
 * @property {string} name - The name of the employer (company).
 * @property {string} image - The URL or path to the employer's logo image.
 * @property {string} startDate - The start date of employment at the company.
 * @property {string} endDate - The end date of employment at the company.
 * @property {JSX.Element[]} technologies - A list of JSX elements representing the technologies used at the employer.
 * @property {JobDescription[]} description - A list of job descriptions for the employer, detailing roles and responsibilities.
 * @property {string} linkedIn - The URL to the employer's LinkedIn profile.
 */
export type Employer = {
  id: number;
  name: string;
  image: string;
  startDate: string;
  endDate: string;
  technologies: { tooltip: string, element: JSX.Element }[];
  description: JobDescription[];
  linkedIn: string;
};