import './App.css';
import {useSelector, useDispatch} from 'react-redux'
// import Button from 'react-bootstrap/Button';
import Button from '@mui/material/Button';

//start
//membuat function untuk pemanggilan action yang akan dipanggil saat button diklik

//action untuk increment
export const incNumber = ()=>{
  return {
      type: "INCREMENT"
  }
}

// action untuk decrement
export const decNumber = ()=>{
  return {
      type:"DECREMENT"
  }
}

// action untuk reset
export const reset = ()=>{
  return {
      type:"RESET"
  }
}
//end

function App() {
  // variable yang berfungsi mengambil hasil nilai state dari reducer
  const myState = useSelector((state)=>state.changeNumber);
  const dispatch = useDispatch();
  return (
   <>
      <div className='container' style={{justifyContent:'center', textAlign:'center'}}>
        <h1>Increment Decrement Counter</h1>
        <div className='button'>
          <h1>Results</h1>
          <h2>{myState}</h2>
          <div>
          <Button style={{margin:'10px'}} variant="contained" onClick={() => dispatch(incNumber())} >Increment</Button>
          <Button style={{margin:'10px'}} variant='warning' onClick={()=>dispatch(decNumber())}>Decrement</Button>
          <Button style={{margin:'10px'}} variant='danger' onClick={()=>dispatch(reset())}>Reset</Button>
          </div>
        </div>
      </div>
   </>
  );
}

export default App;