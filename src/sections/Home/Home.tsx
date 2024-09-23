import { useCallback, useContext } from 'react';

import { GradientColorsContext } from '../../contexts/GradientColorsContext';


import Profile from '../../assets/images/profile.jpeg';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';

export const Home = () => {
  const gradientColors = useContext(GradientColorsContext);

  const handleResumeClick = useCallback(() => {
    // window.open('../../assets/resume.pdf');
  }, []);

  return (
    <Section
      id="home"
    >
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
            duration-300
            hover:scale-105
          "
          src={Profile}
          alt="Christopher Talavera" 
        />
        <h1 className="text-4xl font-bold px-4 md:px-0">
          <span className={`text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-600`}>Christopher Talavera</span> {" "}
        </h1>
        <h2 className="text-2xl font-bold">
          Full-Stack Developer
        </h2>
        <p className="mt-4 text-lg text-gray-300 px-4 md:px-32">
          I specialize in building modern and responsive web applications.
        </p>
        <div className="mt-8 space-x-4">
          <Button 
            text="Resume"
            px={4}
            py={2}
            onClick={handleResumeClick}
          />
        </div>
    </Section>
  );
};