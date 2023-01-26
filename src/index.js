import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MemesDataProvider } from './data/MemesDataContext';
import { NavigationProvider } from './data/NavigationContext';
import { MemeViewProvider } from './data/MemeViewContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <MemeViewProvider>
    <NavigationProvider>
    <MemesDataProvider>
    <App />
    </MemesDataProvider>
    </NavigationProvider>
    </MemeViewProvider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();