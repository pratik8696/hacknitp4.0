import React , {useEffect} from 'react'
import './Timeline.css';
import AOS from 'aos';
import "aos/dist/aos.css";

const Timeline = () => {
    return (
       <div className="timeline-container">
           <h1 className="heading">EVENT SCHEDULE</h1>
            <div class="timeline">
  <div class="outer">
    <div class="card" data-aos="fade-up">
      <div class="info">
        <h3 class="title">Title 1</h3>
        <p className='timeline-des'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </p>
      </div>
    </div>
    <div class="card" data-aos="fade-up">
      <div class="info">
        <h3 class="title">Title 1</h3>
        <p className='timeline-des'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
      </div>
    </div>
    <div class="card" data-aos="fade-up">
      <div class="info">
        <h3 class="title">Title 1</h3>
        <p className='timeline-des'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
      </div>
    </div>
    <div class="card" data-aos="fade-up">
      <div class="info">
        <h3 class="title">Title 1</h3>
        <p className='timeline-des'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
      </div>
    </div>
    <div class="card" data-aos="fade-up">
      <div class="info">
        <h3 class="title">Title 1</h3>
        <p className='timeline-des'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
      </div>
    </div>
    <div class="card" data-aos="fade-up">
      <div class="info">
        <h3 class="title">Title 1</h3>
        <p className='timeline-des'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
      </div>
    </div>
  </div>
</div>
       </div>
    )
}

export default Timeline
