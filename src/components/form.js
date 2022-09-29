import React from "react";

// Membuat class Clock
class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            name: "",
            comment: ""
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleChangeComment = this.handleChangeComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmit(event) {
        alert(`Thankyou ${this.state.name}, For your comment : ${this.state.comment}`);
        event.preventDefault();
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit} className="ui reply form container">
                <label className="field">
                Name:
                <input
                    name='name'
                    type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange} />
                </label>
                <label className="field">
                    Comment:
                    <textarea 
                        name='comment'
                        value={this.state.value}
                        onChange={this.handleChange} />
                </label>
                <input  className="ui facebook button" style={{margin:"20px 0px"}} type="submit" value="Submit" />
            </form>
        )
    }
}

export default Form;