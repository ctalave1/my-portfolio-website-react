/**
 * Represents a project with detailed information about its attributes, technologies used,
 * the type of project, and relevant links.
 *
 * @typedef {Object} Project
 * @property {number} id - A unique identifier for the project.
 * @property {string} name - The name or title of the project.
 * @property {JSX.Element[]} technologies - An array of JSX elements representing the technologies
 * used in the project. These elements are typically icons that represent programming languages, frameworks, etc.
 * @property {string} image - The URL of the image that represents the project.
 * @property {'personal' | 'professional' | 'unavailable'} type - The type of the project, which could be:
 *    - 'personal' for personal projects created by me.
 *    - 'professional' for work-related projects created or contributed to as part of a job or collaboration.
 *    - 'unavailable' for projects that are no longer accessible, typically internal tools or projects from defunct companies.
 * @property {string} website - A link to the project's website or a relevant page. This can be a live project or a product page.
 * @property {string} description - A short description of the project, explaining its purpose, features, and technologies.
 */
export type Project = {
  id: number;
  name: string;
  technologies: { tooltip: string, element: JSX.Element }[];
  image: string;
  type: 'personal' | 'professional' | 'unavailable';
  website: string;
  description: string;
}