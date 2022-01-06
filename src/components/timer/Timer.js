import React , {useEffect} from 'react'
import './Timer.css'
import AOS from 'aos';
import "aos/dist/aos.css";

const Timer = () => {
    var deadline = new Date( "feb 11 , 2022  18:00:00").getTime();

    setInterval(function(){
        var now = new Date().getTime() ;
        var t = deadline - now ;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60 )) / (1000 * 60 ));
        var seconds = Math.floor((t % (1000 * 60  )) / (1000));
        document.querySelector(".days").innerHTML = days;
        document.querySelector(".hours").innerHTML = hours;
        document.querySelector(".minutes").innerHTML = minutes;
        document.querySelector(".seconds").innerHTML = seconds;
    },1000);

    useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

    return (
        <div className='timer-contt' data-aos="fade-up">
           <h1 class="heading">EVENT STARTS IN</h1>
           <div className="timercont">
               <div className="timer-box">
                   <h1 className="big-time days">
                       00
                   </h1>
                   <p className="small-time">
                       Days
                   </p>
               </div>
               <div className="timer-box">
                   <h1 className="big-time hours">
                       00
                   </h1>
                   <p className="small-time">
                       Hours
                   </p>
               </div>
               <div className="timer-box">
                   <h1 className="big-time minutes">
                       00
                   </h1>
                   <p className="small-time">
                       Minutes
                   </p>
               </div>
               <div className="timer-box">
                   <h1 className="big-time seconds">
                       00
                   </h1>
                   <p className="small-time">
                       Seconds
                   </p>
               </div>
           </div>

        </div>
    )
}

export default Timer
