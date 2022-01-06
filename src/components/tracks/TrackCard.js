import React, {useEffect} from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";

const TrackCard = (props) => {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return (
        <div class='track-card' data-aos="fade-up">
         <div className="track-icon">
            <i class="fas fa-robot trac-icon"></i>
         </div>
         <div className="track-description">
             <h2 className="trach-head">
             {props.title}
         </h2>
         <p className="track-des">
            {props.description}
         </p>
         </div>
        </div>
    )
}

export default TrackCard
