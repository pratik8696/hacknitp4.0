// import React, { useEffect } from 'react'
import './Timeline.css';
// import AOS from 'aos';
import "aos/dist/aos.css";

const Timeline = () => {
  return (
    <div className="timeline-container">
      <h1 className="heading">EVENT SCHEDULE</h1>
      <div class="timeline">
        <div class="outer">
          <div class="card" data-aos="fade-up">
            <div class="info">
              <h3 class="title">10 January</h3>
              <p className='timeline-des'>
                Registration Starts for the hackathon.
              </p>
            </div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="info">
              <h3 class="title">6 February</h3>
              <p className='timeline-des'>
                Sessions by various speakers from around the globe will be conducted to get you familiar with the cutting edge technologies.
              </p>
            </div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="info">
              <h3 class="title">10 February</h3>
              <p className='timeline-des'>
                Registration for hackathon ends.
              </p>
            </div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="info">
              <h3 class="title">11 February</h3>
              <p className='timeline-des'>
                Get ready for the 48 hours long heat!!
              </p>
            </div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="info">
              <h3 class="title">13 January</h3>
              <p className='timeline-des'>
                Hackathon Ends.
              </p>
            </div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="info">
              <h3 class="title">15 January</h3>
              <p className='timeline-des'>
                Winners are announced.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
