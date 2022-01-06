import React , {useEffect} from 'react'
import './Intro.css'
import AOS from 'aos';
import "aos/dist/aos.css";

const Intro = () => {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

    return (
       <div className="intro-parent-cont" id='about'>
            <div className='intro-cont'>
            <div className="intro-1"  data-aos="fade-up">
                <h1 className="big-text">
                    48
                </h1>
                <p className="text-small">
                    hours
                </p>
            </div>
             <div className="intro-1"  data-aos="fade-up">
                <h1 className="big-text">
                    200+
                </h1>
                <p className="text-small">
                    projects
                </p>
            </div>
             <div className="intro-1"  data-aos="fade-up">
                <h1 className="big-text">
                    400+
                </h1>
                <p className="text-small">
                    teams
                </p>
            </div>
            <div className="intro-1"  data-aos="fade-up">
                <h1 className="big-text">
                    Online
                </h1>
                <p className="text-small">
                    where
                </p>
            </div>
        </div>
        <div className="intro-cont-child" data-aos="fade-up">
            <div className="event-intro">
                <div className="event-title">
                    <div className="event-emoji">
                   <i class="fas fa-tools"></i>
                   </div>
                <h3 className="event-big-text">
                        WorkShops
                    </h3>
                </div>
                <div className="event-text">
                    
                    <p className="event-small-text">
                        resemble a link, use a button and change it with appropriate styles.
                    </p>
                </div>
                
            </div>

            <div className="event-intro">
                <div className="event-title">
                    <div className="event-emoji">
                   <i class="fas fa-tools"></i>
                   </div>
                <h3 className="event-big-text">
                        Webinars
                    </h3>
                </div>
                <div className="event-text">
                    
                    <p className="event-small-text">
                        resemble a link, use a button and change it with appropriate styles.
                    </p>
                </div>
                
            </div>

            <div className="event-intro">
                <div className="event-title">
                    <div className="event-emoji">
                   <i class="fas fa-tools"></i>
                   </div>
                <h3 className="event-big-text">
                        Collaboration
                    </h3>
                </div>
                <div className="event-text">
                    
                    <p className="event-small-text">
                        resemble a link, use a button and change it with appropriate styles.
                    </p>
                </div>
                
            </div>
            
        </div>
       </div>
    )
}

export default Intro
