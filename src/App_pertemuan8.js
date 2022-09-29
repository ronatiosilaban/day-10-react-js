import './App.css';
import Image from './components/image';
import React from 'react';

//menggannti function component menjadi class component
//pemanggilan data menjadi this.prop.data
function App() {
  return(
    <div>
    <Image/>
    </div>
  )
};

  export default App