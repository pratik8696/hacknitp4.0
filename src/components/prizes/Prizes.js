import React, {useEffect} from 'react'
import './Prizes.css';
import AOS from 'aos';
import "aos/dist/aos.css";

const Prizes = () => {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return (
        <div>
           <h1 className="heading">PRIZES</h1> 
           <div className="prize-container">
               <div data-aos="fade-up">
                   <h2 className="prizes-head">
                   Perks for each participant
               </h2>
               <ul>
                   <li className='list-item'>
                       Cash prize worth 20k sponsored by Quidnunc Infotainment and River Rises.
                   </li>
                   <li className="list-item">
                        Potential candidates get a chance to bag an internship or a full time job at Quidnunc’s IT division with stipend and seed funding upto 2Lakh*.
                   </li>
                   <li className="list-item">
                       Cash prize worth 10k for best hack built on top of Ethereum and for teams that integrate Polygon in their hacks as well the prize money will be 15k along with eligibility for internship/full-time role interviews and a chance to land seed funding of upto 5000 USD(or equivalent)!*.
                   </li>
                   <li className="list-item">
                       Cash prize worth 20k for best Dapp built on Tezos. Continuity grant opportunity up to 5,000 USD(or equivalent) for an outstanding project*.
                   </li>
                   <li className="list-item">
                      Cash prize worth 20k for best Dapp built on Celo and Cash prize worth 20k for best use of IPFS and/or Filecoin*.  
                   </li>
                   <li className="list-item">
                        For top performing teams, exclusive t-shirts and swags will be provided*.
                   </li>
               </ul>
               <div className="prizes-btn">
                   <button className='btn-primary knowmore'>Know More</button>
               </div>
               </div>
           </div>
        </div>
    )
}

export default Prizes
