import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const { name, customerName } = this.props
        return (
            <h1>
                Class Welcome. {name} a.k.a {customerName}
            </h1>
        )
    }
}

export default Welcome