type Technology = {
  id: number;
  label: JSX.Element;
  title: string;
  htmlId: string;
  progress: number;
};

export type Skill = {
  id: number;
  title: string;
  description: string;
  technologies: Technology[];
};