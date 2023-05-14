import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Post from './components/Post';
import MainPage from './components/MainPage'
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MainPage/>
  </BrowserRouter>
);