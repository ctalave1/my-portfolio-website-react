import { PropsWithChildren } from 'react';


/**
 * A functional React component that renders a styled card with dynamic content inside.
 * 
 * The `Card` component is a wrapper that can be used to display any content inside it, such as text, images, or other components. 
 * It includes styling for background color, padding, rounded corners, and hover effects to create an interactive card UI element.
 * 
 * @component
 * @example
 * // Example usage of the Card component:
 * <Card>
 *   <h2>Card Title</h2>
 *   <p>This is some content inside the card.</p>
 * </Card>
 * 
 * @param {PropsWithChildren} props - The properties passed to the `Card` component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the card.
 * 
 * @returns {JSX.Element} A `div` element representing the styled card with the provided content inside.
 */
export const Card = ({ children }: PropsWithChildren) => {
  return (
    <div
      className="bg-gray-800 px-6 py-6 rounded-lg hover:shadow-lg transform transition-transform-300 hover:scale-105"
    >
      {children}
    </div>
  );
};