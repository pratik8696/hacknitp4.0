import React from 'react'
import './NavBar.css'
import logo from '../../images/hacknitplogo.svg'
export const NavBar = () => {
    return (
        <div className='navbar'>
           <div className="hack-nitplogo">
               <img src={logo} alt="" className="hacknitp-logo"/>
           </div>
           <div className="menu">
               <ul className='menu-list'>
                   <li className='menu-item'>About</li>
                   <li className='menu-item'>Tracks</li>
                   <li className='menu-item'>Prizes</li>
                   <li className='menu-item'>Sponsors</li>
                   <li className='menu-item'>Organizers</li>
               </ul>
               <button className='btn btn-primary'>Join us on Discord</button>
           </div>
        </div>
    )
}
