import React from "react"
import "./style.css"

function Contain({children}) {
    return (
            <div className="search">
                {children}
            </div>
    )
}

export default Contain;