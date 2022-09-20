import React from 'react';
import ReactDOM from 'react-dom';
import Navigasi from "./components/nav";
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from "./App"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name={"ronatio"} job={"peserta"}/>
    <App name={"Dani"} job={"peserta"}/>
  </React.StrictMode>
);

// function renderDOM(content, id) {
//   ReactDOM.render(content, document.getElementById(id))
  
// }

// const element = <div style={{color:"black"}}>
//   <Navigasi/>
//   <Container className='Container'>
//   <h1>Bootcamp WGS Batch 3</h1>
//   <h2>Ronatio Parhorasan Silaban</h2>
//   </Container>
//   </div>;


// renderDOM(element,"root")