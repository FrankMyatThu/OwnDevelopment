// rce
import React, { Component } from 'react'

class Counter extends Component {

    // rconst 
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        // without using setState, it cannot auto-update to UI value
        // this.state.count = this.state.count + 1

        // this.setState({
        //     count: this.state.count + 1
        // }, () => { console.log('Callback value', this.state.count) })

        this.setState((ThePerviousValue, props) => ({
            // can also use props if needed
            count: ThePerviousValue.count + 1
        }), () => { console.log('Callback value', this.state.count) })
        console.log(this.state.count)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()} >Increment</button>
            </div>
        )
    }
}

export default Counter
