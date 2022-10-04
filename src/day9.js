import './App.css';
import Image from './components/image';
import React from 'react';
import Video from './components/video';
import data from './components/data'

//react ref
function App() {
  return(
    <div>
    <Video data={data}/>
    </div>
  )
};

  export default App