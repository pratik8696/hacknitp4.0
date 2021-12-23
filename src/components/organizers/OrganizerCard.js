import React from 'react'
import './Organizers.css'
import img17 from '../../images/avatar.gif'

const OrganizerCard = () => {
    return (
        <div className='organizer-card'>
            <div className="animation-circle">

            </div>
            <div className="org-img">
                <img src={img17} alt="not-available" className='person-img'/>
            </div>
            <p className="person-name">
              Elon Musk
            </p>
            <h4 className="person-post">
                Chairperson
            </h4>
            <div className="socials">
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-github"></i>
            </div>
        </div>
    )
}

export default OrganizerCard
