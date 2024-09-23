import { NavBarDropDownItem } from './components/NavBarDropDownItem';

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