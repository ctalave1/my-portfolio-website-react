import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

type ButtonProps = {
  text: string;
  twClasses?: Array<string>
  onClick?: () => void;
}

export const Button = ({ text, twClasses, onClick }: ButtonProps) => {
  const theme = useContext(ThemeContext);

  return (
    <button
      className={`
        ${twClasses ? twClasses.join(' ') : ''}
        bg-gradient-to-r 
        ${theme.gradientColors}
        text-white 
        transform 
        transition-transform
        duration-300 
        hover:scale-105 
        rounded-full
      `}
      onClick={onClick}
    >
      {text}
    </button>
  )
};