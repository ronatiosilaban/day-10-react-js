import React from "react";
import {useState, useEffect} from 'react'

export default function Search({handleFormSubmit}) {
    const[state, setState] =useState({term : " "});
        
    const onSubmit =(e)=>{
      e.preventDefault()
      
      handleFormSubmit(state.term)
    }
    return(
        <div className="ui segment" >
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Image search :</label>
                    <input
                    type="text"
                    value={state.term}
                    onChange={(e)=>setState({term : e.target.value})}/>
        
                </div>
        
            </form>
        </div>
       
    )
    
}