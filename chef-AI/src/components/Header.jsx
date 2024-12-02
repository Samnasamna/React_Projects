import React from "react"
import chef from "../assets/chef.png"

export default function Header(){
    return(
        <div className="headContainer">
            <img src={chef} alt="chef logo" />
            <h1>Chef Claude</h1>
        </div>
    )
}