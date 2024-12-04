import { useContext } from 'react';

import { NavBarContext } from '../../../../contexts/NavBarContext';

/**
 * The props for the `NavBarDropDownItem` component.
 * 
 * @typedef {Object} NavBarDropDownItemProps
 * @property {string} text - The text to display for the navigation item.
 * @property {string} sectionId - The ID of the section to navigate to when the item is clicked.
 */
type NavBarDropDownItemProps = {
  text:string,
  sectionId: string
};

/**
 * A functional React component that represents a single item in the mobile navigation dropdown menu.
 * 
 * This component displays a clickable list item (`li`) containing a navigation link (the `text` prop) that,
 * when clicked, triggers the `handleDropDownItemClick` function passed via context. This function navigates 
 * to the section identified by the `sectionId` prop.
 * 
 * @component
 * @example
 * // Example usage of the NavBarDropDownItem component:
 * <NavBarDropDownItem text="Home" sectionId="#home" />
 * 
 * @param {NavBarDropDownItemProps} props - The properties passed to the `NavBarDropDownItem` component.
 * @param {string} props.text - The text to display for the navigation item.
 * @param {string} props.sectionId - The ID of the section to navigate to when the item is clicked.
 * 
 * @returns {JSX.Element} A list item (`li`) that triggers navigation when clicked.
 */
export const NavBarDropDownItem = ({ text, sectionId }: NavBarDropDownItemProps) => {
  const handleDropDownItemClick = useContext(NavBarContext);

  return (
    <li onClick={() => handleDropDownItemClick(sectionId)} className="py-1 w-full text-center">
      <div className="hover:text-gray-400 lg:hidden">{text}</div>
    </li>
  );
};