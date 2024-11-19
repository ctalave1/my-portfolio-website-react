import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FaSpinner } from "react-icons/fa6";

type ButtonProps = {
  text: string;
  twClasses?: Array<string>
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button' | undefined;
  disabled?: boolean;
  spinner?: boolean;
}

export const Button = ({ text, twClasses, onClick, type, disabled = false, spinner = false }: ButtonProps) => {
  const theme = useContext(ThemeContext);

  return (
    <button
      type={type}
      className={`
        ${twClasses ? twClasses.join(' ') : ''}
        ${disabled ? '' : 'bg-gradient-to-r'}
        ${disabled ? 'bg-gray-500' : theme.gradientColors}
        text-white 
        ${!spinner ? 'transform' : ''}
        ${!spinner ? 'transition-transform' : ''}
        ${!spinner ? 'duration-300' : ''}
        ${!spinner ? 'hover:scale-105' : ''}
        rounded-full
        ${spinner ? 'flex' : ''}
        ${spinner ? 'items-center' : ''}
        ${spinner ? 'justify-between' : ''}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={spinner ? "pr-1" : ""}>{text}</span>
      {spinner && <FaSpinner className="text-sm animate-spin" />}
    </button>
  )
};