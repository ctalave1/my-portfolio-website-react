import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'


/**
 * The root rendering of the React application.
 * 
 * This function initializes the React app by rendering the root component (`App`) inside
 * the HTML element with the ID of `root`. It wraps the app in React's `StrictMode` to help
 * identify potential issues in the app during development.
 * 
 * @function
 * @example
 * // The root element is initialized and the app is rendered in StrictMode
 * createRoot(document.getElementById('root')!).render(
 *   <StrictMode>
 *     <App />
 *   </StrictMode>,
 * );
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
