import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'
import hacknitpold from '../../images/hacknitp-old.svg'
import gameon from '../../images/game-on.svg'
import Timer from '../timer/Timer'
import NavB from '../navbar2/NavB'
import Prizes from '../prizes/Prizes'
import Tracks from '../tracks/Tracks'
import Timeline from '../timeline/Timeline'
import Instructions from '../instructions/Instructions'
import Organizers from '../organizers/Organizers'
import Sponsors from '../sponsors/Sponsors'
import Contact from '../contact/Contact'
import Faq from '../faq/Faq'
import Footer from '../footer/Footer'
import Intro from '../intro/Intro'
import AOS from 'aos';
import "aos/dist/aos.css";

const HomePage = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className='body'>
            <div className="home-body">
                <NavB />
                <div className="home-body-bg" data-aos="fade-up">
                    <div className="home-left">
                        <img src={hacknitpold} className='hack-old' alt="hacknitp"/>
                        <h3 className="home-date">
                            February 11,2022 - February 13,2022
                        </h3>
                        <p className="home-para">
                            The hack is only a small part of the competition. The real spirit lies in building your network in the growing tech community and collaborating with some of the finest minds of the nation. Just remember, taking the Hackathons too seriously defeats the purpose. Save the seriousness for pitching to investors. Keeping an open mind will open new doors, help build new relationships and acquire new skills.This is hackNITP.
                        </p>
                        <div className="home-btns headline">
                            <button className='btn-secondary' >Registration Soon</button>
                            <button className='btn-secondary'><Link to={{ pathname: "https://bit.ly/hacknitp-4-discord" }} target='_blank' className='discordbtn'>
                                <span>Join Discord</span>
                            </Link></button>
                        </div>
                    </div>
                    <div className="home-right">
                        <img src={gameon} alt="game-on" className='game-on' />
                    </div>

                </div>
            </div>
            <Intro />
            <Timer />
            <Prizes />
            <Timeline />
            <Tracks />
            <Instructions />
            <Organizers />
            <Sponsors />
            <Contact />
            <Faq />
            <Footer />
        </div >
    )
}

export default HomePage
