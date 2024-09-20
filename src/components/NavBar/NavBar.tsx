import { useCallback, useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa6";

const listenForOutsideClicks = (listening, setListening, menuRef, setIsOpen) => {
  return () => {
    if (listening) return;
    if (!menuRef.current) return;
    setListening(true);
    [`click`, `touchstart`].forEach(() => {
      document.addEventListener(`click`, (evt) => {
        if (menuRef.current.contains(evt.target)) return;
        setIsOpen(false);
      });
    });
  }
};

export const NavBar = () => {
  const navRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  useEffect(listenForOutsideClicks(
      listening,
      setListening,
      navRef,
      setIsDropDownOpen
  ), [listening, setListening, navRef, setIsDropDownOpen]);

  const handleMenuClick = useCallback(() => {
    console.log(isDropDownOpen);
    setIsDropDownOpen((prevState) => !prevState);
  }, [isDropDownOpen]);

  const handleDropDownItemClick = (sectionId: string) => {
    handleMenuClick();
    window.location.href = sectionId;
  };

  const handleContactClick = useCallback(() => {
    window.location.href = '#contact';
  }, []);

  return (
    <nav ref={navRef} className="bg-black text-white px-8 md:px-16 lg:px-24 top-0 w-full fixed z-20">
      <div className="container py-2 flex justify-between items-center">
        <div className="text-xl font-bold md:inline">C<span className="hidden md:inline">hristopher{" "}</span>T<span className="hidden md:inline">alavera</span></div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-400 hidden md:inline">Home</a>
          <a href="#about" className="hover:text-gray-400 hidden md:inline">About Me</a>
          <a href="#skills" className="hover:text-gray-400 hidden md:inline">Skills</a>
          <a href="#projects" className="hover:text-gray-400 hidden md:inline">Projects</a>
          <a href="#contact" className="hover:text-gray-400 hidden md:inline">Contact</a>
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
            px-4 
            py-2 
            rounded-full
          "
          onClick={handleContactClick}
        >
          Contact Me
        </button>
        <div className="md:hidden">
          <button onClick={handleMenuClick}>
            <FaBars className="transform transition-transform duration-300 hover:rotate-180"/>
          </button>
        </div>
      </div>
      {isDropDownOpen && (
        <div className="z-50 bg-black py-1 md:hidden">
          <ul className="container flex flex-col">
            <li onClick={() => handleDropDownItemClick('#home')} className="py-1 w-full text-center">
              <div className="hover:text-gray-400 md:hidden">Home</div>
            </li>
            <li onClick={() => handleDropDownItemClick('#about')} className="py-1 w-full text-center">
              <div className="hover:text-gray-400 md:hidden">About Me</div>
            </li>
            <li onClick={() => handleDropDownItemClick('#skills')} className="py-1 w-full text-center">
              <div className="hover:text-gray-400 md:hidden">Skills</div>
            </li>
            <li onClick={() => handleDropDownItemClick('#projects')} className="py-1 w-full text-center">
              <div className="hover:text-gray-400 md:hidden">Projects</div>
            </li>
            <li onClick={() => handleDropDownItemClick('#contact')} className="py-1 w-full text-center">
              <div className="hover:text-gray-400 md:hidden">Contact</div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};