import React from 'react'
import './faq.css'

const FaqBluePrint = () => {
      let num = document.querySelectorAll(".faq-blue-print").length;
            for (let i = 0; i < num; i++) {
            document.querySelectorAll(".faq-blue-print")[i].addEventListener("click", function() {
                var ans = document.querySelectorAll('.answer')[i];
                ans.classList.toggle('.display-block');
            });
            }
    return (
        <div className='faq-blue-print'>
            <div className="faq-flex">
                <div className="fa-icon">
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div className="question">
                   <h3 className='faq-ques'>
                       Who can apply for the hackathon?</h3> 
                </div>
            </div>
            <div className="answer">
                    <p className="faq-ans">
                        Participants can take part only as a team. A team must comprise of at least 2 members and at.</p> 
                </div>
        </div>
    )
}

export default FaqBluePrint
