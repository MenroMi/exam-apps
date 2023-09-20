import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {TextareaProvider} from './provider/TextareaProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TextareaProvider>
      <App />
    </TextareaProvider>
  </React.StrictMode>,
);
