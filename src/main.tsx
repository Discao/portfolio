import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/index.css'; // Ensure this path is correct
import App from './App'; // Remove the `.tsx` extension

// Ensure the root element exists in your HTML file
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  console.error('Root element not found');
}