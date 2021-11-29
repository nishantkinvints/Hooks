import React from 'react'

const Wrap_div = (props) => {
    return (
        <div className="main_div_wrapper">
            <h1>{props.subtext}</h1>
            {props.children}
        </div>
    )
}

export default Wrap_div
