import React from "react"
import {NavLink} from "react-router-dom"

function Header() {
    return (
        <header>
            <nav>   
                <ul>                    
                    <li>
                        <NavLink exact={true} activeClassName='is-active' to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='is-active' to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='is-active' to='/devices'>Devices</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
