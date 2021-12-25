import React from 'react'
import { NavBar } from '../navbar/NavBar'
import './Homepage.css'
import hacknitpold from '../../images/hacknitp-old.svg'
import gameon from '../../images/game-on.svg'
import curve1 from '../../images/Curve1.svg'
import Timer from '../timer/Timer'
import NavB from '../navbar2/NavB'
import Prizes from '../prizes/Prizes'
import Tracks from '../tracks/Tracks'
import Timeline from '../timeline/Timeline'
import Instructions from '../instructions/Instructions'
import Organizers from '../organizers/Organizers'
import Highlights from '../highlights/Highlights'
import Sponsors from '../sponsors/Sponsors'
import Contact from '../contact/Contact'
import Faq from '../faq/Faq'
import Footer from '../footer/Footer'

const HomePage = () => {
    return (
        <div className='body'>
            <NavB/>
            <div className="home-body">
                <div className="home-left">
                    <img src={hacknitpold}  className='hack-old'/>
                    <h3 className="home-date">
                        November 20,2021 - February 19,2022
                    </h3>
                    <p className="home-para">
                        The hack is only a small part of the competition. The real spirit lies in building your network in the growing tech community and collaborating with some of the finest minds of the nation. Just remember, taking the Hackathons too seriously defeats the purpose. Save the seriousness for pitching to investors. Keeping an open mind will open new doors, help build new relationships and acquire new skills.This is hackNITP.
                    </p>
                    <div className="home-btns">
                        <button className='btn-primary'>Register Now</button>
                        <button className='btn-secondary'>Join Discord</button>
                    </div>
                </div>
                <div className="home-right">
                    <img src={gameon} alt="" className='game-on'/>
                </div>

            </div>
            <Timer/>
            <Prizes/>
            <Timeline/>
            <Tracks/>
            <Instructions/>
            <Organizers/>
            <Sponsors/>
            <Contact/>
            <Faq/>
            <Footer/>
        </div>
    )
}

export default HomePage
