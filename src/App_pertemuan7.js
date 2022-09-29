import './App.css';
import Form from './components/form';
import React from 'react';

//menggannti function component menjadi class component
//pemanggilan data menjadi this.prop.data
function App() {
  return(
    <div>
    <Form/>
    </div>
  )
};

  export default App