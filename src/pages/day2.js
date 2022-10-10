
import './App.css';

//menerima data yang dikirim dari index.js

function App({name, job}) {
  console.log(name);
  return (
    <div>    
        <h1>Bootcamp WGS Batch 3</h1>
        <p>Hallo Saya {name}, Saya adalah {job} Bootcamp Wgs Batch 3</p>
    
        </div>
  );
}

export default App;