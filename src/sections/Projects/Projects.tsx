import { useMemo } from 'react';

import projectImage from '../../assets/images/profile.jpeg';

export const Projects = () => {
  const projects = useMemo(() => [
    {
      id: 1,
      name: "adfsgdsgfsdf",
      technologies: "sdfsdfsdfd",
      image: projectImage,
      github: "https://github.com/ctalave1"
    },
    {
      id: 2,
      name: "fdsfsd",
      technologies: "xvcvcxc",
      image: projectImage,
      github: "https://github.com/ctalave1"
    }
  ], []);

  return (
    <div className="text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt="" className="rounded-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a target="_blank" href={project.github} className="inline-block bg-gradient-to-r from-yellow-400 to-blue-600 text-white px-4 py-2 rounded-full" rel="noopener noreferrer">View on Github</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};