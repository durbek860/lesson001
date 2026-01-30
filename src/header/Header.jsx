import React from "react"
import { FaChevronLeft } from "react-icons/fa";

import "./Header.css"

function Header(){
    function logOut(){
        localStorage.clear();
        window.location.reload();
    }

    return <header>
        <h1>LOGO</h1>
        <FaChevronLeft />

        <button onClick={logOut} >Log Out</button>
        
    </header>
}

export default Header