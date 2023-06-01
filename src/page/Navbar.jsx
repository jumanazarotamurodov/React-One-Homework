import React from "react";
import Logo from "../component/Logo";
import List from "../component/List";
import "./Main3.css"

const Navbar = () =>{
    return (
        <div className="container2">
            <div className="logo">
            <Logo />
            </div>
            <div className="list">
            <List />
            </div>
        </div>
    )
}

export default Navbar