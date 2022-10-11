import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
      <Router>
        <App />
      </Router>
      </Provider>
</React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import { Provider } from "react-redux";
// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk'
// import reducers from "./thunkReducers";
// import App from './redux-thunk/App';
// const store = createStore(reducers, applyMiddleware(thunk))

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//      <Provider store={store}>
//         <App />
//       </Provider>
// );