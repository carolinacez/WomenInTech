import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <header className="navigation"> 
        <h1> 
        <Link to="/">
            GIRL CODE
        </Link>
        </h1>

        <nav>
        <button>HELLO</button>  
        </nav>
        </header>

    )
}

export default Nav;