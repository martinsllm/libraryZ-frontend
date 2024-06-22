import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { DataProvider } from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
