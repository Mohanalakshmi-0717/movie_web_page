import React from "react";
import "./navbar.css";

function Navbar(){
    return(
        <div>
            <nav className="navbar">
            <h2><span className="logospot">CINEMA</span><span >SPOT</span></h2>
            <ul className="nav">
                <li className="list"><a href="#">Home</a></li>
                <li className="list"><a href="#">Movies</a></li>
                <li className="list"><a href="#"> About</a></li>
            </ul>
              </nav>
        </div>
    )
}

export default Navbar