import React from "react";
import "./Main4.css"

const Feature = () =>{
    return(
        <div className="feature">
            <div className="box4">
            <div className="box5">
                <p>All</p>
                <p>UI</p>
                <p>UX</p>
            </div>
            <div className="box5">
                <p>Enhancement</p>
                <p>Bug</p>
            </div>
            <div className="box5">
                <p>Bug</p>
            </div>
        </div>
        <div className="box4">
            <div className="box6">
                <h1>Roadmap</h1>
                <a href="#">Viev</a>
            </div>
            <div className="box6">
                <div className="dote1"></div>
                <p>Planned</p>
                <span>2</span>
            </div>
            <div className="box6">
                <div className="dote2"></div>
                <p>In-Progress</p>
                <span>3</span>
            </div>
            <div className="box6">
                <div className="dote3"></div>
                <p>Live</p>
                <span>1</span>
            </div>
        </div>
        </div>
        
    )
}

export default Feature