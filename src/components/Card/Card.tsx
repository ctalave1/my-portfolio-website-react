import { PropsWithChildren } from 'react';

type CardProps = {
  cardKey: number
};

export const Card = ({ cardKey, children }: PropsWithChildren<CardProps>) => {
  return (
    <div
      key={cardKey}
      className="bg-gray-800 px-6 py-6 rounded-lg hover:shadow-lg transform transition-transform-300 hover:scale-105"
    >
      {children}
    </div>
  );
};