import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../../images/hacknitplogo.svg'

const Footer = () => {
    return (
        <div className='footer' data-aos="fade-up">
            <div className="footer-up">
                <div className="footer-up-left">
                    <img src={logo} alt="" className='foot-logo' />
                </div>
                <div className="footer-up-right">
                    <a href="/" className="termNc">
                        Terms and conditions
                    </a>
                    <a href="/" className="cnc">
                        Code of conduct
                    </a>

                    <button className="btn-primary btn-last">
                        <Link to={{ pathname: "https://bit.ly/hacknitp-4-discord" }} target='_blank' className='discordbtnf'>
                            Join Our Discord
                        </Link>
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
                    <Link to={{ pathname: "https://twitter.com/hackslash_nitp/" }} target='_blank' className='discordbtnf'>
                        <i class="fab fa-twitter socialm"></i>
                    </Link>
                    <Link to={{ pathname: "https://www.linkedin.com/company/hackslash" }} target='_blank' className='discordbtnf'>
                        <i class="fab fa-linkedin socialm"></i>
                    </Link>
                    <Link to={{ pathname: "https://www.instagram.com/hackslash.nitp/?hl=en" }} target='_blank' className='discordbtnf'>
                        <i class="fab fa-instagram socialm"></i>
                    </Link>
                    <Link to={{ pathname: "https://bit.ly/hacknitp-4-discord" }} target='_blank' className='discordbtnf'>
                        <i class="fab fa-discord socialm"></i>
                    </Link>
                    <Link to={{ pathname: "https://www.youtube.com/c/HackSlashDevelopersClub/" }} target='_blank' className='discordbtnf'>
                        <i class="fab fa-youtube socialm"></i>
                    </Link>
                </div>
            </div>
        </div>
        // https://www.instagram.com/hackslash.nitp/?hl=en
        // https://www.linkedin.com/company/hackslash
        // https://www.youtube.com/c/HackSlashDevelopersClub/
        // https://twitter.com/hackslash_nitp/
        // https://www.facebook.com/hackSlash.nitp/
    )
}

export default Footer
