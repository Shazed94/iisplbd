import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
// Default theme
import '@splidejs/react-splide/css';
import "react-image-gallery/styles/css/image-gallery.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
