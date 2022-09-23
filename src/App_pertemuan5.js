import './App.css';
import Button from './components/Button';
import React from 'react';

//menggannti function component menjadi class component
//pemanggilan data menjadi this.prop.data
export default class App extends React.Component {
    render (){
  return(
    <div >
       {
          this.props.data?.map((item, index) => (
      <div key={index}>

          <Button item ={item} index ={index}/>
        </div>
   
         ))
        }
       </div>
    
  )
  };
}

// export default App;