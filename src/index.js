import React from 'react';
import ReactDOM from 'react-dom';
import Navigasi from "./components/nav";




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

function renderDOM(content, id) {
  ReactDOM.render(content, document.getElementById(id))
  
}

const element = <div style={{color:"black"}}><Navigasi/><h1>Bootcamp WGS Batch 3</h1>
                    <h2>Ronatio Parhorasan Silaban</h2></div>;


renderDOM(element,"root")

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

