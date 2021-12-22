import React from 'react'
import './NavB.css'
import njack from './njackLogo-removebg-preview.png'
const NavB = () => {
    return (
        <div class="navbar2">
            <div className="nav-jack">
                <img src={njack} alt="" class="njack-logo"/>
            </div>
            <div className="right">
                 <nav class="stroke">
                    <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Downloads</a></li>
                    <li><a href="#">More</a></li>
                    <li><a href="#">Nice staff</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavB
