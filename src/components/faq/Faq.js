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
    <div className='faq-container' id='faq'>
      <div className="faq-head" data-aos="fade-up">
        <h1 className="heading">
          <span className="white">
            Frequently Asked </span> Questions
        </h1>
        <p className="grey">

        </p>
      </div>
      <div className="faqs" data-aos="fade-up">

        <div className="accordion-item">
          <div id="test" className="accordion-item-header">
            <div className="accordion-item-title">Do you have a particular theme for the Hackathon ?</div>
            <span className="icon"></span>
          </div>
          <div className="accordion-item-body">
            <div className="accordion-item-body-content">
              Open innovation
              Employability
              Sustainable development
              Education
              Social security and awareness
              Food
            </div>
          </div>
        </div>
        <div className="divider"></div>

        <div className="accordion-item">
          <div id="test" className="accordion-item-header">
            <div className="accordion-item-title">What can be the size of Team ?</div>
            <span className="icon"></span>
          </div>
          <div className="accordion-item-body">
            <div className="accordion-item-body-content">
              A team can consist of 1-4 members.
            </div>
          </div>
        </div>
        <div className="divider"></div>

        <div className="accordion-item">
          <div id="test" className="accordion-item-header">
            <div className="accordion-item-title">Are there any registration charges ? </div>
            <span className="icon"></span>
          </div>
          <div className="accordion-item-body">
            <div className="accordion-item-body-content">
              Nope! None at all.
            </div>
          </div>
        </div>
        <div className="divider"></div>

        <div className="accordion-item">
          <div id="test" className="accordion-item-header">
            <div className="accordion-item-title">Do we get any certificate for participation ?</div>
            <span className="icon"></span>
          </div>
          <div className="accordion-item-body">
            <div className="accordion-item-body-content">
              Yes, you do get a certificate of participation if you qualify for the finals after the initial shortlisting.
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="accordion-item">
          <div id="test" className="accordion-item-header">
            <div className="accordion-item-title">I don't have a CSE background. Can I still participate ? </div>
            <span className="icon"></span>
          </div>
          <div className="accordion-item-body">
            <div className="accordion-item-body-content">
              Yes. Creativity is independent of your technical skills. You can learn the tools and technologies anytime.
            </div>
          </div>
        </div>
        <div className="divider"></div>
      </div>

      <div className="faq-foot" data-aos="fade-up">
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
