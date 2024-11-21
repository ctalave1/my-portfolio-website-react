import { FaGithub, FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Christopher Talavera. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a 
              target="_blank" 
              rel="noopener noreferral" 
              href="https://www.linkedin.com/in/christopher-talavera-9a7651130"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a 
              target="_blank" 
              rel="noopener noreferral" 
              href="https://github.com/ctalave1?tab=repositories"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};