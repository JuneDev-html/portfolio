// import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

export const RouteSwitch = () => {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/shopping-cart/'}>
      <App />
    </BrowserRouter>
  );
};
