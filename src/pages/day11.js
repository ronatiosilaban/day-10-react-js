import './App.css';
import Image from './components/image';
import React from 'react';
import Video from './components/funcVideo';
import data from './components/data'

//react ref
function App() {
  //membuat tampilan youtube menggunakan API Youtube dengan metode State
  return(
    <div>
    <Video />
    </div>
  )
};

  export default App