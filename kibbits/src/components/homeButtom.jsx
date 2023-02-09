import React from "react";
import Home from "../img/home.png"


import { Link } from "react-router-dom";

function ButtonHome () {
    return (
        <div>
        <button className="button"><Link to="/" className="home"><img src={Home} className="homePic" alt="home" /></Link></button>
        </div>
    )
}

export default ButtonHome;