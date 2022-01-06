import React from "react"
import {Link} from "react-router-dom"
import './NavB.css'
import logo from '../../images/hacknitplogo.svg'
const NavB = () => {
    function handleMenu(e) {
        e.preventDefault();
        document.querySelector('.popup').classList.toggle("popup-open");
    }
    return (
        <div className='nav-bar'>
            <div className="popup">
                <div className="cut-btn-flex" onClick={handleMenu}>
                    <i class="fas fa-times popup-cut-btn"></i>
                </div>
                <nav class="stroke">
                    <ul className='nav-mob'>
                        <li onClick={handleMenu}><a href="#">Home</a></li>
                        <li onClick={handleMenu}><a href="#about">About</a></li>
                        <li onClick={handleMenu}><a href="#tracks">Tracks</a></li>
                        <li onClick={handleMenu}><a href="#contact">Contact</a></li>
                        <li onClick={handleMenu}><a href="#faq">FAQ</a></li>
                    </ul>
                    <div className="disc-btn">
                        <button className='btn btn-primary'>
                            <Link to={{ pathname: "https://bit.ly/hacknitp-4-discord" }} target='_blank' className='discordbtnf'>
                                Join Our Discord
                            </Link>
                        </button>
                    </div>
                </nav>
            </div>
            <div class="navbar2">
                <div className="nav-jack">
                    <img src={logo} alt="" class="njack-logo" />
                </div>
                <div className="right">
                    <nav class="stroke">

                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#tracks">Tracks</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                        <div className="disc-btn">
                            <button className='btn btn-primary'>
                                <Link to={{ pathname: "https://bit.ly/hacknitp-4-discord" }} target='_blank' className='discordbtnf'>
                                    Join Our Discord
                                </Link>
                                </button>
                        </div>
                    </nav>
                </div>
                <div className="right-alt">
                    <i class="fas fa-bars" onClick={handleMenu}></i>
                </div>
            </div>
        </div>
    )
}

export default NavB
