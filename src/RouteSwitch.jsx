import { BrowserRouter } from 'react-router-dom';
import App from './App';

export const RouteSwitch = () => {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/portfolio/'}>
      <App />
    </BrowserRouter>
  );
};
