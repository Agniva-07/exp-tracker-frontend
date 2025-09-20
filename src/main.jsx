import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GlobalProvider } from './context/globalContext';
import { GlobalStyle } from './styles/GlobalStyle';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
)
