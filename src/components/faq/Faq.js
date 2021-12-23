import React from 'react'
import './faq.css'
import FaqBluePrint from './FaqBluePrint'
const faq = () => {

const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    // Allow to collapse one item at a time
    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion-item-header.active"
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }
    //

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
  accordionItemHeader.addEventListener("click", function () {
    document.getElementById("test").scrollIntoView({ behavior: "smooth" });
  });
});


    return (
        <div className='faq-container'>
            <div className="faq-head">
                <h1 className="heading">
                <span className="white">
                    Frequently Asked </span> Questions
            </h1>
            <p className="grey">
                Participants can take part only as a team. A team must comprise of.
            </p>
            </div>
            <div className="faqs">

                <div className="accordion-item">
                <div id="test" className="accordion-item-header">
                <div className="accordion-item-title">Lorem ipsum dolor sit amet consectetur?</div>
                <span className="icon"></span>
                </div>
                <div className="accordion-item-body">
                <div className="accordion-item-body-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, hic ipsam est iste adipisci ex illo natus
                    labore earum tempore.
                </div>
                </div>
            </div>
            <div className="divider"></div>
            
            <div className="accordion-item">
                <div id="test" className="accordion-item-header">
                <div className="accordion-item-title">When and how it should be used?</div>
                <span className="icon"></span>
                </div>
                <div className="accordion-item-body">
                <div className="accordion-item-body-content">
                    The accordion is a graphical control element comprising a vertically stacked list of items, such as labels or
                    thumbnails. An accordion is similar in purpose to a tabbed interface, a list of items where exactly one item
                    is expanded into a panel
                    <button>Read more</button>
                </div>
                </div>
            </div>
            <div className="divider"></div>
            
            <div className="accordion-item">
                <div id="test" className="accordion-item-header">
                <div className="accordion-item-title">What if the user clicks on a collapsed card while another card is open?</div>
                <span className="icon"></span>
                </div>
                <div className="accordion-item-body">
                <div className="accordion-item-body-content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, explicabo? Laboriosam labore iure expedita
                    facilis.
                </div>
                </div>
            </div>
            <div className="divider"></div>
            
            <div className="accordion-item">
                <div id="test" className="accordion-item-header">
                <div className="accordion-item-title">How to choose an icon to indicate expansion?</div>
                <span className="icon"></span>
                </div>
                <div className="accordion-item-body">
                <div className="accordion-item-body-content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis accusamus velit laboriosam, suscipit facere
                    incidunt fuga temporibus iste et omnis?
                </div>
                </div>
            </div>
            </div>

          <div className="faq-foot">
          <h2 className="heading">
            <span className="white">
              What are you waiting for? Register now.
            </span>
          </h2>
          <div className="register-btn-faq">
            <button className="btn-primary register-faq">
            Register Now
          </button>
          </div>
          </div>  
    </div>
    )
}

export default faq
