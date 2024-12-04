import { useMemo, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

/**
 * The props for the `ProgressBar` component.
 * 
 * @typedef {Object} ProgressBarProps
 * @property {string} id - A unique identifier for the progress bar, used as the `id` attribute of the outer `div`.
 * @property {number} progress - A number between 0 and 1 that determines the progress of the bar (e.g., 0.5 means 50% progress).
 */
type ProgressBarProps = {
  id: string;
  progress: number;
};

/**
 * A functional React component that renders a progress bar with a dynamic width and theme-based gradient colors.
 * 
 * The progress bar width is determined by the `progress` prop, which is a value between 0 and 1, 
 * and the background color is dynamically set using the `ThemeContext`.
 * 
 * @component
 * @example
 * // Example usage of the ProgressBar component:
 * <ProgressBar id="task-progress" progress={0.7} />
 * 
 * @param {ProgressBarProps} props - The properties passed to the `ProgressBar` component.
 * @param {string} props.id - A unique identifier for the progress bar.
 * @param {number} props.progress - A number between 0 and 1 that indicates the progress of the bar.
 * 
 * @returns {JSX.Element} A `div` element representing the progress bar containing an inner bar with a dynamic width and theme-based gradient colors.
 */
export const ProgressBar = ({ id, progress }: ProgressBarProps) => {
  const theme = useContext(ThemeContext);

  const progressPercentage: { width: string } = useMemo(() => {
    const percentage = Math.floor(progress * 100);
    return { width: `${percentage}%` };
  }, [progress]);

  return (
    <div id={id} className="grow bg-gray-300 rounded-full h-2.5 ml-3">
      <div style={progressPercentage} className={`bg-gradient-to-r ${theme.gradientColors} h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105`}>
      </div>
    </div>
  );
};