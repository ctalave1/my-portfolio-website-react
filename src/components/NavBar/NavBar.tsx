import { MutableRefObject, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa6";

import { Button } from "../Button";
import { NavBarDropDown } from "./components/NavBarDropDown";
import { NavBarContext } from "./contexts/NavBarContext";

/**
 * A function that listens for clicks outside the navigation menu and closes the dropdown if clicked outside.
 * 
 * This function listens for `click` and `touchstart` events and checks whether the event target is inside
 * the dropdown menu. If the click is outside, it sets the dropdown state to `false`, closing the dropdown.
 * 
 * @function
 * @param {boolean} listening - A flag indicating whether the event listeners are active.
 * @param {Function} setListening - A state setter function to update the `listening` state.
 * @param {MutableRefObject<HTMLElement>} menuRef - A reference to the navigation menu element.
 * @param {Function} setIsOpen - A state setter function to control the dropdown's open/closed state.
 * @returns {Function} The event listener callback to be executed on `click` or `touchstart` events.
 */
const listenForOutsideClicks = (listening: boolean, setListening: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; }, menuRef: MutableRefObject<HTMLElement>, setIsOpen: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; }) => {
  return () => {
    if (listening) return;
    if (!menuRef.current) return;
    setListening(true);
    [`click`, `touchstart`].forEach(() => {
      document.addEventListener(`click`, (evt) => {
        if (menuRef.current.contains(evt.target as Node)) return;
        setIsOpen(false);
      });
    });
  }
};

/**
 * A functional React component that renders a responsive navigation bar with dropdown functionality.
 * 
 * The navigation bar includes links to different sections of the page and a "Contact Me" button. On mobile 
 * devices, the navigation bar includes a hamburger menu that toggles the visibility of the dropdown links.
 * The dropdown is closed when the user clicks outside of the menu.
 * 
 * @component
 * @example
 * // Example usage of the NavBar component:
 * <NavBar />
 * 
 * @returns {JSX.Element} A `nav` element containing navigation links, a contact button, and a mobile dropdown menu.
 */
export const NavBar = () => {
  const navRef = useRef(document.createElement('nav'));
  const [listening, setListening] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(listenForOutsideClicks(
      listening,
      setListening,
      navRef,
      setIsDropDownOpen
  ), [listening, setListening, navRef, setIsDropDownOpen]);

  const handleMenuClick = useCallback(() => {
    setIsDropDownOpen((prevState) => !prevState);
  }, [setIsDropDownOpen]);

  const handleDropDownItemClick = useCallback((sectionId: string) => {
    handleMenuClick();
    window.location.href = sectionId;
  }, [handleMenuClick]);

  const handleContactClick = useCallback(() => {
    window.location.href = '#contact';
  }, []);

  return (
    <nav ref={navRef} className="bg-black text-white px-8 md:px-16 lg:px-24 top-0 w-full fixed z-20">
      <div className="container py-2 flex justify-between items-center">
        <div className="text-xl font-bold md:inline">C<span className="hidden md:inline">hristopher{" "}</span>T<span className="hidden md:inline">alavera</span></div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-400 hidden lg:inline">Home</a>
          <a href="#about" className="hover:text-gray-400 hidden lg:inline">About Me</a>
          <a href="#skills" className="hover:text-gray-400 hidden lg:inline">Skills</a>
          <a href="#projects" className="hover:text-gray-400 hidden lg:inline">Projects</a>
          <a href="#contact" className="hover:text-gray-400 hidden lg:inline">Contact</a>
        </div>
        <Button
          text="Contact Me"
          twClasses={['px-4', 'py-2', 'hidden', 'lg:inline']}
          onClick={handleContactClick}
        />
        <div className="lg:hidden">
          <button onClick={handleMenuClick}>
            <FaBars data-open={isDropDownOpen} className="transform transition-transform duration-300 data-[open='true']:rotate-180"/>
          </button>
        </div>
      </div>
      {isDropDownOpen && (
        <NavBarContext.Provider value={handleDropDownItemClick} >
          <NavBarDropDown />
        </NavBarContext.Provider>
      )}
    </nav>
  );
};