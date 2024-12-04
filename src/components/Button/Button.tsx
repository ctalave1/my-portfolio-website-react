import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FaSpinner } from "react-icons/fa6";

/**
 * The props for the `Button` component.
 * 
 * @typedef {Object} ButtonProps
 * @property {string} text - The text displayed on the button.
 * @property {Array<string>} [twClasses] - An optional array of Tailwind CSS class names for custom styling.
 * @property {Function} [onClick] - An optional click handler function for the button.
 * @property {'submit' | 'reset' | 'button' | undefined} [type] - The type of the button, default is 'button'.
 * @property {boolean} [disabled=false] - A boolean indicating whether the button is disabled.
 * @property {boolean} [spinner=false] - A boolean indicating whether to show a loading spinner on the button.
 */
type ButtonProps = {
  text: string;
  twClasses?: Array<string>
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button' | undefined;
  disabled?: boolean;
  spinner?: boolean;
}

/**
 * A functional React component that renders a button with optional spinner, gradient background, and hover effects.
 * 
 * The button can display a loading spinner when the `spinner` prop is set to `true`, and includes 
 * various conditional styles like a gradient background and hover scale effect. The button can also be 
 * disabled via the `disabled` prop.
 * 
 * @component
 * @example
 * // Example usage of the Button component:
 * <Button text="Submit" onClick={handleClick} type="submit" spinner={true} />
 * 
 * @param {ButtonProps} props - The properties passed to the `Button` component.
 * @param {string} props.text - The text displayed inside the button.
 * @param {Array<string>} [props.twClasses] - Optional Tailwind CSS class names for additional styling.
 * @param {Function} [props.onClick] - The click handler function to be executed when the button is clicked.
 * @param {'submit' | 'reset' | 'button' | undefined} [props.type] - The button's type, defaults to 'button'.
 * @param {boolean} [props.disabled=false] - A flag indicating whether the button is disabled.
 * @param {boolean} [props.spinner=false] - A flag to display a loading spinner inside the button.
 * 
 * @returns {JSX.Element} A `button` element styled with Tailwind CSS, with conditional spinner and gradient background.
 */
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