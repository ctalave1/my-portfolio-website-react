import { useMemo, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

type ProgressBarProps = {
  id: string;
  progress: number;
};

export const ProgressBar = ({ id, progress }: ProgressBarProps) => {
  const theme = useContext(ThemeContext);

  const progressPercentage: { width: string } = useMemo(() => {
    const percentage = Math.floor(progress * 100);
    return { width: `${percentage}%` };
  }, [progress]);

  return (
    <div id={id} className="grow bg-gray-800 rounded-full h-2.5 ml-3">
      <div style={progressPercentage} className={`bg-gradient-to-r ${theme.gradientColors} h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105`}>
      </div>
    </div>
  );
};