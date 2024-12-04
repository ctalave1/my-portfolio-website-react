export type Project = {
  id: number;
  name: string;
  technologies: JSX.Element[];
  image: string;
  type: 'personal' | 'professional' | 'unavailable';
  website: string;
  description: string;
}