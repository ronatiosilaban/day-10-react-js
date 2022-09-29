import React from "react";


export default class Search extends React.Component {
  state = {term : " "};

  onFromSubmit =(e)=>{
    e.preventDefault()
    
    this.props.onSubmit(this.state.term)
  }
    render (){
  return(
<div className="ui segment" >
    <form onSubmit={this.onFromSubmit} className="ui form">
        <div className="field">
            <label>Image search :</label>
            <input
            type="text"
            value={this.state.term}
            onChange={(e)=>this.setState({term : e.target.value})}/>

        </div>

    </form>
</div>
  )
}}