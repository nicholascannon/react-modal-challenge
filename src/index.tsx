import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ModalController from './components/Modal/ModalController';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <ModalController>
            <App />
        </ModalController>
    </React.StrictMode>
);
