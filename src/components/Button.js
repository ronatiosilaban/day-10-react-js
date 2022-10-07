import {useState} from "react"

export default function Button(item, index) {
  //state untuk menghandel like dan menampung data saat uses menklik like
    const [counter, setCounter] = useState(0)
    function add() {
        setCounter(counter + 1)

    }
    console.log(item);
    //menerima data yang dikirim dari App.js
    return(
        <div className='ui container comments'>
       <div className='comment' key={index}>
         <a href='/' className='avatar'>
           <img alt='avatar' src={item.item.avatar}/>
         </a>
         <div className='content'>
           <a href='/' className='author'>
            {item.item.name}
           </a>
           <div className='metadata'>
             <span className='date'>{item.item.date}</span>
             <span>{counter}</span>
           </div>
           <div className='text'>{item.item.comment}</div>
           <button onClick={add}>Click Me</button>
         </div>
 
       </div>    
        </div>
     
    )
    
}
