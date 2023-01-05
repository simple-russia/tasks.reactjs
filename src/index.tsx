import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// TODO add stirngs
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
); // TODO eslint fix
