import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './tutorial-1/App';
// import App from './tutorial-2/App';
// import App from './tutorial-3/App';
// import App from './tutorial-5/App';
// import App from './tutorial-6/App';
import App from './tutorial-7/App';

import "./tutorial-7/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
