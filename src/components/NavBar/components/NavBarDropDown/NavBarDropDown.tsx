import { NavBarDropDownItem } from './components/NavBarDropDownItem';

/**
 * A functional React component that renders the dropdown menu for the navigation bar.
 * 
 * The `NavBarDropDown` component includes navigation items such as "Home", "About Me", "Skills", "Projects", 
 * and "Contact", each wrapped in a `NavBarDropDownItem` component. This dropdown is intended for mobile views
 * and is displayed when the hamburger menu is clicked.
 * 
 * @component
 * @example
 * // Example usage of the NavBarDropDown component:
 * <NavBarDropDown />
 * 
 * @returns {JSX.Element} A `div` containing an unordered list with navigation links to different sections of the page.
 */
export const NavBarDropDown = () => {
  return (
    <div className="z-50 bg-black py-1 lg:hidden">
      <ul className="container flex flex-col">
        <NavBarDropDownItem 
          text="Home"
          sectionId='#home'
        />
        <NavBarDropDownItem 
          text="About Me"
          sectionId='#about'
        />
        <NavBarDropDownItem 
          text="Skills"
          sectionId='#skills'
        />
        <NavBarDropDownItem 
          text="Projects"
          sectionId='#projects'
        />
        <NavBarDropDownItem 
          text="Contact"
          sectionId='#contact'
        />
      </ul>
    </div>
  );
};