import { useMemo } from "react";

type ProgressBarProps = {
  id: string;
  progress: number;
};

export const ProgressBar = ({ id, progress }: ProgressBarProps) => {
  const progressPercentage: number = useMemo(() => {
    const percentage = Math.floor(progress * 100);
    return percentage;
  }, [progress]);

  return (
    <div id={id} className="grow bg-gray-800 rounded-full h-2.5">
      <div className={`bg-gradient-to-r from-yellow-400 to-blue-600 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-[${progressPercentage}%]`}>
      </div>
    </div>
  );
};