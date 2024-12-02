import React from "react"
import logo from "../assets/logo.png"
import resourse from "../assets/resourse.png"

export default function Content(){
    return(
        <main className="content">
            <div className="facts">
                <h1>Fun Facts About React</h1>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
            </div>
            <div className="why">
                <h1>Why React?</h1>
                <div className="logo">
                    <div className="l1">
                        <img src={logo}/>
                        <p>Lorem ipsum dolor sit amet consectetur.
                            Lorem ipsum dolor sit.
                        </p>
                    </div>
                    <div className="l1">
                        <img src={logo}/>
                        <p>Lorem ipsum dolor sit amet consectetur.
                            Lorem ipsum dolor sit.
                        </p>
                    </div>
                    <div className="l1"> 
                        <img src={logo}/>
                        <p>Lorem ipsum dolor sit amet consectetur.
                            Lorem ipsum dolor sit.
                        </p>
                    </div>
                    
                </div>  
            </div>
            <div className="slide">
                <h1>Online Resourses</h1>
                <div className="r1">
                    <img src={resourse}/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius repellat ipsum ducimus quidem dolore ab corporis consequatur laborum tempore unde fugit eaque expedita praesentium amet voluptates nihil, optio velit!</p>
                    
                </div>
                <div className="r1">
                    <img src={resourse} className="img1"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius repellat ipsum ducimus quidem dolore ab corporis consequatur laborum tempore unde fugit eaque expedita praesentium amet voluptates nihil, optio velit!</p>
                </div>
                <div className="r1">
                    <img src={resourse} className="img2"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius repellat ipsum ducimus quidem dolore ab corporis consequatur laborum tempore unde fugit eaque expedita praesentium amet voluptates nihil, optio velit!</p>
                </div>


            </div>
        </main>
    )
}