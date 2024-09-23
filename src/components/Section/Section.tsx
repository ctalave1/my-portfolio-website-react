import { PropsWithChildren } from 'react';

type SectionProps = {
  id: string;
  twClasses?: Array<string>;
}

export const Section = ({ id, twClasses, children }: PropsWithChildren<SectionProps>) => {
  return (
    <div id ={id} className={`${twClasses ? twClasses.join(' ') : ''} text-white`}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {children}
      </div>
    </div>
  );
}