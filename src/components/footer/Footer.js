import React from 'react'
import './Footer.css'
import logo from '../../images/hacknitplogo.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-up">
                <div className="footer-up-left">
                     <img src={logo} alt="" className='foot-logo'/>
                </div>
                <div className="footer-up-right">
                     <a href="/" className="termNc">
                         Terms and conditions
                     </a>
                     <a href="/" className="cnc">
                         Code of conduct
                     </a>
                     <button className="btn-primary btn-last">
                         Join Our Discord
                     </button>
                </div>
            </div>
            <div className="hr">

            </div>
            <div className="foot-bottom">
               <h4 className="foot-bottom-left">
                   ©2022 HACKSLASH | All rights reserved
               </h4>
              <div className="foot-bottom-right">
                <i class="fab fa-twitter socialm"></i>
                <i class="fab fa-linkedin socialm"></i>
                <i class="fab fa-instagram socialm"></i>
                <i class="fab fa-discord socialm"></i>
                <i class="fab fa-youtube socialm"></i>
              </div>
            </div>
        </div>
    )
}

export default Footer
