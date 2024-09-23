import { PropsWithChildren } from 'react';

type SectionProps = {
  id: string;
}

export const Section = ({ id, children }: PropsWithChildren<SectionProps>) => {
  return (
    <div id ={id} className="text-white text-center py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {children}
      </div>
    </div>
  );
}