import { useContext } from 'react';
import { FaEnvelope, FaPhone, FaMapLocation } from 'react-icons/fa6';

import { Button } from '../../components/Button';

import { ThemeContext } from '../../contexts/ThemeContext';

export const Contact = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className="text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${theme.gradientColors}`}>Let's Talk</h3>
            <p>I'm open to discussing web development projects or professional opportunities.</p>
            <div className="mb-4 mt-8">
              <FaEnvelope className={`inline-block ${theme.iconColorPrimary} mr-2`} />
              <a href="mailto:talavera.christopher@yahoo.com" className="hover:underline">
                talavera.christopher@yahoo.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className={`inline-block ${theme.iconColorPrimary} mr-2`} />
              +19546704157
            </div>
            <div className="mb-4">
              <FaMapLocation className={`inline-block ${theme.iconColorPrimary} mr-2`} />
              <span>Charlotte, North Carolina</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4">
              <div>
                <label className="block mb-2" htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  className={`w-full p-2 rounded ${theme.inputBgColor} border ${theme.inputBorderColor} focus:outline-none focus:border-yellow-400`}
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block mb-2" htmlFor="name">Your Email</label>
                <input
                  id="email"
                  type="email"
                  className={`w-full p-2 rounded ${theme.inputBgColor} border ${theme.inputBorderColor} focus:outline-none focus:border-yellow-400`}
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5} 
                  className={`w-full p-2 rounded ${theme.inputBgColor} border ${theme.inputBorderColor} focus:outline-none focus:border-yellow-400`}
                  placeholder="Enter your message"
                />
              </div>
              <Button
                text="Send"
                twClasses={['px-8', 'py-2']}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};