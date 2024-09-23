 import { FaEnvelope, FaPhone, FaMapLocation } from 'react-icons/fa6';

export const Contact = () => {
  return (
    <div className="text-white pt-20 pb-10" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-600 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or professional opportunities.</p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-yellow-400 mr-2" />
              <a href="mailto:talavera.christopher@yahoo.com" className="hover:underline">
                talavera.christopher@yahoo.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-yellow-400 mr-2" />
              +19546704157
            </div>
            <div className="mb-4">
              <FaMapLocation className="inline-block text-yellow-400 mr-2" />
              <span>1945 SW 15th St #57, Deerfield Beach, FL, USA</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4">
              <div>
                <label className="block mb-2" htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block mb-2" htmlFor="name">Your Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5} 
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
                  placeholder="Enter your message"
                />
              </div>
              <button
                className="
                  bg-gradient-to-r 
                  from-yellow-400 
                  to-blue-600 
                  text-white 
                  hidden 
                  md:inline 
                  transform 
                  transition-transform
                  duration-300 
                  hover:scale-105 
                  px-8 
                  py-2 
                  rounded-full
                "
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};