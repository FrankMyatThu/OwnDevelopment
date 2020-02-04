import React from 'react'

const Hello = () =>{
    // return(
    //     <div className="dummyClass">
    //         <h1>Hello Frank from HELLO JSX</h1>
    //     </div>
    // )

    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello Frank from HELLO React.creatElement'))

}

export default Hello