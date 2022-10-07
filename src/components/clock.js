import React from "react";

class Time extends React.Component {
    //class component menerima data dari App.js
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }

    //lifeCycle untuk menerima data
    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }
//untuk menghapus data lama
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
// untuk mengganti data lama dengan data baru
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h3>Time:</h3>
                <h4>{this.state.date.toLocaleTimeString()}</h4>
            </div>
        )
    }
}

export default Time;