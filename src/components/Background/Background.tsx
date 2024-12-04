/**
 * A functional React component that renders a dynamic background with star, twinkling, and cloud effects.
 * 
 * The `Background` component is used to enhance the visual experience of a webpage by adding a background with 
 * animation effects. It consists of three main parts: stars, twinkling, and clouds, each represented by its 
 * own `div` element with associated CSS classes for animation.
 * 
 * @component
 * @example
 * // Example usage of the Background component:
 * <Background />
 * 
 * @returns {JSX.Element} A `div` element containing three layers for the animated background effects: stars, twinkling, and clouds.
 */
export const Background = () => {
  return (
    <>
      <div className="stars"></div>
      <div className="twinkling"></div> 
      <div className="clouds"></div>
    </>
  );
}