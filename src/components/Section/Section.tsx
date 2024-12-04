import { PropsWithChildren } from 'react';

/**
 * The props for the `Section` component.
 * 
 * @typedef {Object} SectionProps
 * @property {string} id - A unique identifier for the section, used as the `id` attribute of the `div` element.
 * @property {Array<string>} [twClasses] - An optional array of Tailwind CSS class names to apply custom styles to the section.
 */
type SectionProps = {
  id: string;
  twClasses?: Array<string>;
}

/**
 * A functional React component that renders a page section with optional Tailwind CSS classes.
 * 
 * @component
 * @example
 * // Example usage:
 * <Section id="about-us" twClasses={['bg-gray-800', 'py-8']}>
 *   <h2>About Us</h2>
 *   <p>We are a team of passionate developers...</p>
 * </Section>
 * 
 * @param {SectionProps} props - The properties passed to the `Section` component.
 * @param {string} props.id - A unique ID for the section.
 * @param {Array<string>} [props.twClasses] - Optional Tailwind CSS classes to apply custom styles.
 * @param {React.ReactNode} props.children - The content inside the section to be rendered.
 * 
 * @returns {JSX.Element} A `div` element representing the section with optional styles and children.
 */
export const Section = ({ id, twClasses, children }: PropsWithChildren<SectionProps>) => {
  return (
    <div id ={id} className={`${twClasses ? twClasses.join(' ') : ''} text-white`}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {children}
      </div>
    </div>
  );
}