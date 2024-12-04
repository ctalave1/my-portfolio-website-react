/**
 * Represents a technology with its associated details and proficiency progress.
 *
 * @typedef {Object} Technology
 * @property {number} id - A unique identifier for the technology.
 * @property {JSX.Element} label - The icon or visual representation of the technology.
 * @property {string} title - The name of the technology (e.g., 'React', 'Node.js').
 * @property {string} htmlId - A unique identifier used for the `htmlFor` attribute in labels, typically corresponding to the technology's title.
 * @property {number} progress - A numerical representation of the user's proficiency with the technology (e.g., a value from 0 to 5).
 */
type Technology = {
  id: number;
  label: JSX.Element;
  title: string;
  htmlId: string;
  progress: number;
};

/**
 * Represents a skill category, including a description and the associated technologies.
 *
 * @typedef {Object} Skill
 * @property {number} id - A unique identifier for the skill category.
 * @property {string} title - The title of the skill category (e.g., 'Frontend Development').
 * @property {string} description - A brief description of what the skill category entails.
 * @property {Technology[]} technologies - An array of technologies associated with the skill category, including their progress.
 */
export type Skill = {
  id: number;
  title: string;
  description: string;
  technologies: Technology[];
};