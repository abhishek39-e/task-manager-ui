import { StrictMode } from 'react';
import { createRoot, BrowserRouter } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <createBrowserRouter>
      <App />
    </createBrowserRouter>
  </StrictMode>,
);
