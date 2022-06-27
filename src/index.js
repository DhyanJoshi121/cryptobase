import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'antd/dist/antd.min.css';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
