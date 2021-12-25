import React from 'react'
import './NavB.css'
import logo from '../../images/hacknitplogo.svg'
const NavB = () => {
    function handleMenu(e){
        e.preventDefault();
       document.querySelector('.popup').classList.toggle("popup-open");  
    }
    return (
        <>
        <div className="popup">
           <div className="cut-btn-flex" onClick={handleMenu}>
                <i class="fas fa-times popup-cut-btn"></i>
           </div>
                 <nav class="stroke">
                    <ul className='nav-mob'>
                    <li onClick={handleMenu}><a href="#">Home</a></li>
                    <li onClick={handleMenu}><a href="#">About</a></li>
                    <li onClick={handleMenu}><a href="#">Downloads</a></li>
                    <li onClick={handleMenu}><a href="#">More</a></li>
                    <li onClick={handleMenu}><a href="#">Nice staff</a></li>
                    </ul> 
                    <div className="disc-btn">
                        <button className='btn btn-primary' onClick={handleMenu}>Join us on Discord</button>
                    </div>
                </nav>
            </div>
        <div class="navbar2">
            <div className="nav-jack">
                <img src={logo} alt="" class="njack-logo"/>
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
                    <div className="disc-btn">
                        <button className='btn btn-primary'>Join us on Discord</button>
                    </div>
                </nav>
            </div>
            <div className="right-alt">
                <i class="fas fa-bars" onClick={handleMenu}></i>
            </div>
        </div>
        </>
    )
}

export default NavB
