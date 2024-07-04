import React from 'react';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';  
import './index.css';
import { createRoot } from 'react-dom/client';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
