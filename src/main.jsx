<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
=======
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './styles/GlobalStyle.jsx';
import GlobalFontStyle from './components/assets/fonts/GlobalFontStyle.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <App />
    <GlobalStyle />
    <GlobalFontStyle />
  </>
  // </React.StrictMode>
);
>>>>>>> dev
