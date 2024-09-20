import { FaGithub, FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Christopher</h3>
            <p className="text-gray-400">Full-Stack Developer based in the USA, specializing in web and software development</p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-l-lg bg-gray-900 border border-gray-600 focus:outline-none focus:border-yellow-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-blue-600 text-white px-4 py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div> */}

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
              href="https://github.com/ctalave1"
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