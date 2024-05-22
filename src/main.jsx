import React from 'react';

//Dependencies
import ReactDOM from 'react-dom/client';

//Components
import { JournalApp } from './JournalApp.jsx';

//Styles
import './styles.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <JournalApp />
    </BrowserRouter>
  </React.StrictMode>,
)
