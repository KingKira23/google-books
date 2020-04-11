import React from "react"
import "./style.css"


function Cards({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export default Cards;