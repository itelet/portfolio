import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/inconsolata";
import "@fontsource/inconsolata/200.css"; 
import "@fontsource/inconsolata/300.css"; 
import "@fontsource/inconsolata/400.css"; 
import "@fontsource/inconsolata/500.css"; 
import "@fontsource/inconsolata/600.css"; 
import "@fontsource/inconsolata/700.css"; 
import "@fontsource/inconsolata/800.css"; 
import "@fontsource/inconsolata/900.css"; 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
