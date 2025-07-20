import React from "react"
import gargipic from '../assets/gargipic.jpg'

import "./UserCard.css"

const UseCard  = (props) => {
    return (
        <div className="user-container">
            <p id="user-name">{props.name}</p>
            <img id="user-img" src={props.image} alt={props.name}></img> 
            <p id="user-desc">{props.desc}</p>

        </div>
    )
}
export default UseCard