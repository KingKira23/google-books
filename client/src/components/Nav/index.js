import React from "react"
import { Link, useLocation } from "react-router-dom"
import "./style.css"



function Nav() {
    const location = useLocation();

    return (
        <div>
            <h1 className="header">Google Books</h1>
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Search
                </Link>
                </li>
                <li className="nav-item">
                    <Link to="/saved" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Saved
                </Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;