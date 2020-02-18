//rce
import React, { Component } from 'react'

class EventBind extends Component {
    //rcons
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
    }

    clickHandler() {
        console.log(this);
        this.setState({
            message: 'Goodbye'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>Click</button>
            </div>
        )
    }
}

export default EventBind
