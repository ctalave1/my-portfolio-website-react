type JobDescription = {
    title: string;
    bullets: Array<string>;
  };
  
export type Employer = {
  id: number;
  name: string;
  image: string;
  startDate: string;
  endDate: string;
  technologies: JSX.Element[];
  description: JobDescription[];
  linkedIn: string;
};