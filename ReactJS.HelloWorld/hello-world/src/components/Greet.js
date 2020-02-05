import React from 'react'

const Greet = (props) => {
    console.log(props)
    return <h1>Hello {props.name} (using paramerter) { props.customerName } </h1>
}

export default Greet