import React, {Component} from 'react'

class Welcome extends Component {
    render(){
    return <h1>Class Welcome {this.props.name} a.k.a {this.props.customerName}</h1>
    }
}

export default Welcome