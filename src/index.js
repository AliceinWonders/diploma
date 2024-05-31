import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Post from './components/Post';
import MainPage from './components/MainPage'
import {BrowserRouter} from 'react-router-dom'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);