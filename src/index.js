import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import HeaderContainer from './components/Header/HeaderContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderContainer/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


