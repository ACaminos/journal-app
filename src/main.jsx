import React from 'react';

//Dependencies
import ReactDOM from 'react-dom/client';

//Redux
import { store } from './store';

//Components
import { JournalApp } from './JournalApp.jsx';


//Styles
import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </Provider>
    <Analytics/>
  </React.StrictMode>,
)
