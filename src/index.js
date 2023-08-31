import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import HeaderContainer from './components/Header/HeaderContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <HeaderContainer/>
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


