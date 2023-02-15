import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { ContextProvider } from './SocketContext';
import './styles.css';

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>,

     document.getElementsById('root'));