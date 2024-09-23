import { useContext } from 'react';

import { NavBarContext } from '../../../../contexts/NavBarContext';

type NavBarDropDownItemProps = {
  text:string,
  sectionId: string
};

export const NavBarDropDownItem = ({ text, sectionId }: NavBarDropDownItemProps) => {
  const handleDropDownItemClick = useContext(NavBarContext);

  return (
    <li onClick={() => handleDropDownItemClick(sectionId)} className="py-1 w-full text-center">
      <div className="hover:text-gray-400 md:hidden">{text}</div>
    </li>
  );
};