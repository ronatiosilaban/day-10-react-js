import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from "./App_pertemuan5"
import data from './components/data';
import Navbar from './components/nav'

//import props dan panggil saat merender halaman app




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <App data={data}/>
  </React.StrictMode>
);