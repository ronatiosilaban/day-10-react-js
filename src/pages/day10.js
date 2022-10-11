
import '../App.css'

import {useState, useEffect} from 'react'

function App() {
//membuat tampilan jam statis yang berubah-rubah setiap ada perubahan waktu
const [date, setDate] = useState(new Date());
  
function refreshClock() {
  setDate(new Date());
}

useEffect(() => {
  const timerId = setInterval(refreshClock, 1000);
  return function cleanup() {
    clearInterval(timerId);
  };
}, []);

  return (
    // <div>    
    //     <h1> My favorite color is {color} !</h1>
    //     <button type='button' onClick={()=>setColor("Blue")}>Blue</button>
    //     <button type='button' onClick={()=>setColor("Red")}>Red</button>
    //     <button type='button' onClick={()=>setColor("Pink")}>Pink</button>
    //     <button type='button' onClick={()=>setColor("Green")}>Green</button>
    
    // </div>
    <>
   <h1>
      {date.toLocaleTimeString()}
    </h1>
    </>
  );
}

export default App;