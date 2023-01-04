import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
//import Navbar from './components/Navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider 
    domain="3tone.eu.auth0.com" 
    clientId="CaM7ygbgEdLQyTP9G9xLDPfWoAfQw0l4" 
    audience="https://8888-noah3tone-writeyourownw-zhz3s6jlids.ws-eu62.gitpod.io/"
    redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
