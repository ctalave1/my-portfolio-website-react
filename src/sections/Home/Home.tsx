import { useCallback } from 'react';
import Profile from '../../assets/images/profile.jpeg';

export const Home = () => {
  // const handleContactMeClick = useCallback(() => {
  //   window.location.href="#contact";
  // }, []);
  const handleResumeClick = useCallback(() => {
    // window.open('../../assets/resume.pdf');
  }, []);

  return (
    <div className="text-white text-center py-20" id="home">
      <img
        className="
          mx-auto
          mb-8
          w-48
          h-48
          rounded-full
          object-cover
          transform
          transition-transform
          duration-1000
          hover:scale-105
        "
        src={Profile}
        alt="Christopher Talavera" 
      />
      <h1 className="text-4xl font-bold px-4 md:px-0">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-600">Christopher Talavera</span> {" "}
      </h1>
      <h2 className="text-2xl font-bold">
        Full-Stack Developer
      </h2>
      <p className="mt-4 text-lg text-gray-300 px-4 md:px-32">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
      {/* <button
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
            px-4 
            py-2 
            rounded-full
          "
          onClick={handleContactMeClick}
        >
          Contact Me
        </button> */}
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
            px-4 
            py-2 
            rounded-full
          "
          onClick={handleResumeClick}
        >
          Resume
        </button>
      </div>
    </div>
  );
};