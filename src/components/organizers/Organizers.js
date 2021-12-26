import React from 'react'
import OrganizerCard from './OrganizerCard'
import './Organizers.css'

const Organizers = () => {
    return (
        <div>
            <h1 className="heading">Judges\
                <span className="white">
                   Leads
                </span>
            </h1>
             <div className="organizers-grid">
                 <OrganizerCard />
                 <OrganizerCard/>
                 <OrganizerCard/>
                 <OrganizerCard/>
                 <OrganizerCard/>
                 <OrganizerCard/>
                 <OrganizerCard/>
                 <OrganizerCard/>
             </div>
        </div>
    )
}

export default Organizers
