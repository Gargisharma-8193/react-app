import React from "react"
import "./Button.css"
const Button  = (props) => {
    return (
        <div className="user-container">
            {props.children}
            <button onClick={props.handleClick} >
            {props.text}
        </button>
        </div>
    )
}
export default Button