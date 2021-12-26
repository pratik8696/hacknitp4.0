import React, {useEffect} from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";

const TrackCard = () => {
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
             IoT
         </h2>
         <p className="track-des">
            Potential candidates get a chance to bag an internship or a full time job at Quidnunc’s IT division with stipend and seed funding upto 2Lakh*. 
         </p>
         </div>
        </div>
    )
}

export default TrackCard
