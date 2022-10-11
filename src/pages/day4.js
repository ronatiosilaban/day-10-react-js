import '../App.css'

import React from 'react';

//menggannti function component menjadi class component
//pemanggilan data menjadi this.prop.data
//menerima data yang dikirim dari index.js
export default class Day4 extends React.Component {
    render (){
  return(
    <div className='ui container comments'>
       {
        //mapping data array dari index.js
          this.props.data?.map((item, index) => (
      <div className='comment' key={index}>
        <a href='/' className='avatar'>
          <img alt='avatar' src={item.avatar}/>
        </a>
        <div className='content'>
          <a href='/' className='author'>
           {item.name}
          </a>
          <div className='metadata'>
            <span className='date'>{item.date}</span>
          </div>
          <div className='text'>{item.comment}</div>
        </div>

      </div>    
         ))
        }
       </div>
    
  )
  };
}
