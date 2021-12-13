import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import './index.css';
import App from './App.jsx';

const rootElement = document.getElementById ("root")
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
// );

// import React from 'react';
// import ReactDOM from 'react-dom';

// import './index.css';
// import App from './App.jsx';

// const rootElement = document.getElementById ("root")
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
