import React from "react"
import logo from "../assets/logo.png"

export default function Header(){
    return(
        <div className="header">
            <div className="headDetails">
                <img src={logo} />
                <h1>React Blog</h1>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}