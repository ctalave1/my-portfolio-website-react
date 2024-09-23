import { createContext } from 'react';

export type NavBarContextType = ((sectionId: string) => void);

export const NavBarContext = createContext<NavBarContextType>(() => {});