import React from 'react'
import SponsorBP from './SponsorBP';
import './Sponsors.css';

const Sponsors = () => {
    return (
        <div>
            <h1 className="heading"><span className='white'>
                SPONSORS \ </span> PARTNERS
            </h1>

            <h2 className="level2-heading platinum">
                Platinum Sponsors
            </h2>
            <div className="platinum-cont">
                <SponsorBP />
                <SponsorBP />
            </div>
            <h2 className="level2-heading gold">
                Gold Sponsors
            </h2>
            <div className="platinum-cont">
                <SponsorBP />
                <SponsorBP />
                <SponsorBP />
            </div>
            <h2 className="level2-heading silver">
                Silver Sponsors
            </h2>
            <div className="platinum-cont">
                <SponsorBP />
                <SponsorBP />
                <SponsorBP />
                <SponsorBP />
                <SponsorBP />
                <SponsorBP />
                <SponsorBP />
                <SponsorBP />
                <SponsorBP />
                <SponsorBP />
                <SponsorBP />
                <SponsorBP />

            </div>
            <br></br>
            <br></br>
            <h1 className="heading"><span className='white'>
                Lead </span> Organizer
            </h1>
            <h1 className="heading"><span className='white'>
                Community </span> Partner
            </h1>

            <div className="enquire-sponsors-cont" data-aos="fade-up">
                <h1 className="heading"><span className='white'>Want to Sponsor us?</span></h1>
                <p className="last-yr-sponsors">
                    Click here to see our last year sponsors
                    <i class="fab fa-send"></i>
                </p>
                <h2 className="heading">
                    <span className="white">
                        Contact us at <a href="mailto:hackslash@nitp.ac.in" className='mail-id'> hackslash@nitp.ac.in</a>
                    </span>
                </h2>
                <div className="sponsor-brochure-btn dnld-sponsor-broc">
                    <button className='btn-primary'>Download Sponsor Brochure</button>
                </div>

            </div>


        </div>
    )
}

export default Sponsors
