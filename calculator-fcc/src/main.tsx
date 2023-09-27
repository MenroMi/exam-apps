import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components';
import {CalculatorProvider} from './provider/CalculatorProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CalculatorProvider>
      <App />
    </CalculatorProvider>
  </React.StrictMode>,
);
