import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { store } from './store'
import { Provider } from 'react-redux'
import Login from './pages/Login';
import Home from './pages/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


