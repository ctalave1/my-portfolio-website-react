import AboutImage from '../../assets/images/profile.jpeg';
import { ProgressBar } from '../../components/ProgressBar';

export const About = () => {
  return (
    <div className="text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-base mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <ProgressBar
                  id="htmlandcss"
                  progress={10/12}
                />
              </div>

              <div className="flex items-center">
                <label htmlFor="nodejs" className="w-2/12">
                  Node.js
                </label>
                <ProgressBar 
                  id="nodejs"
                  progress={9/12}
                />
              </div>

              <div className="flex items-center">
                <label htmlFor="react" className="w-2/12">
                  React
                </label>
                <ProgressBar
                  id="react"
                  progress={11/12}
                />
              </div>
            </div>

            <div className="mt-4 flex justify-between text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-600">
                  10
                </h3>
                <p>Years experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-600">
                  X
                </h3>
                <p>Projects Completed</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-600">
                  Y
                </h3>
                <p>Happy Employers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}