import './App.css';
import Time from './components/clock';
import React from 'react';

//menggannti function component menjadi class component
//pemanggilan data menjadi this.prop.data
function App() {
  return(
    <div>
    <Time/>
    </div>
  )
};

  export default App
