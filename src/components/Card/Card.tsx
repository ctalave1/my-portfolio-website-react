import { PropsWithChildren } from 'react';

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <div
      className="bg-gray-800 px-6 py-6 rounded-lg hover:shadow-lg transform transition-transform-300 hover:scale-105"
    >
      {children}
    </div>
  );
};