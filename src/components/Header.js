import React from "react"
import {Link} from "react-router-dom"

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link exact to="/">Home</Link>
                    </li>
                    <li>
                        <Link exact to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
