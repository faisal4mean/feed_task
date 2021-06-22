import "mdbootstrap/css/bootstrap.css";
import "mdbootstrap/css/mdb.css";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {Navigation} from './navigation';



ReactDOM.render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>,
  document.getElementById('root')
);


