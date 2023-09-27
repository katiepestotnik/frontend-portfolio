import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
  <React.StrictMode>
    <App />
    </React.StrictMode>
    </Router>,
  document.getElementById('root')
);

