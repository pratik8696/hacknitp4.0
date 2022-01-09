import React from 'react'
import './Organiser.css'


const Organiser = (props) => {
    return (
        <div className='main-cont'>
            <div className="Organiser-card">  
                <div className="Organiser-card-image">
                    <img src={props.logo} alt="HackSlash" className='card-img'/>
                </div>
                <div className="Organiser-card-text">
                    <h1 className="Organiser-card-heading">{props.name}</h1><br></br>
                    <p className="Organiser-card-para">{props.desc}</p>
                   
                    <br/>
                    <div className="Organiser-card-social-icons">
                        <a href={props.facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a href={props.insta} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href={props.linkedin} target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Organiser
