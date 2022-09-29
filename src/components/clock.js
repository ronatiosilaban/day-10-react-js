import React from "react";

class Time extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

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