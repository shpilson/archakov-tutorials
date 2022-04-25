import React from 'react';
// import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Router } from 'react-router';

// import App from './tutorial-1/App';
// import App from './tutorial-2/App';
// import App from './tutorial-3/App';
// import App from './tutorial-5/App';
// import App from './tutorial-6/App';

// import App from './tutorial-7/App';
// import "./tutorial-7/styles.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// import App from './register-form/App';
// import "./register-form/index.scss";


// import App from './tutorial-8/App';

// import App from './form-field/App';

import App from './server/App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
