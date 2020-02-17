import React from 'react'

const Greet = ({ name, customerName }) => {
    //console.log(props)
    return (
        <div>
            <h1>Hello {name} (using paramerter) {customerName} </h1>
            {/* {props.children} */}
        </div>
    )
}

export default Greet