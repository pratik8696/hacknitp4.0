import React from 'react'
import './Organiser.css'
import logo from '../../images/hackslash.svg'

const Organiser = () => {
    return (
        <div className='main-cont'>
            <div className="Organiser-card">  
                <div className="Organiser-card-image">
                    <img src={logo} alt="HackSlash" className='card-img'/>
                </div>
                <div className="Organiser-card-text">
                    <h1 className="Organiser-card-heading">Hackslash Club</h1><br></br>
                    <p className="Organiser-card-para">
                    Hackslash Developers' Club, NIT Patna is a community intended to provide a room for college students to learn and collaborate on a plethora of projects among themselves as well as with mentors. It is open for every student, ranging from novice developers who are just starting, to advanced developers who want to further enhance their skills.
                    </p><br/>
                    <div className="Organiser-card-social-icons">
                        <a href='https://www.facebook.com/hackSlash.nitp' target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a href='https://www.instagram.com/hackslash.nitp/' target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href='https://www.linkedin.com/company/hackslash' target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Organiser
