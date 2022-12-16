import React from 'react'
import './Viewmore.css';
import { Carousel } from 'react-responsive-carousel';
import Overlay from '../../Components/Overlay/Overlay';
import viewcaro1 from '../../Assets/viewcarousel2.png';
import viewcaro2 from '../../Assets/viewcarousel2.png';
import viewcaro3 from '../../Assets/viewcarousel3.png';
import viewcaro4 from '../../Assets/viewcarousel4.png';
import viewcaro5 from '../../Assets/viewcarousel5.png';
import viewcaro6 from '../../Assets/viewcarousel6.png';
import viewcaro7 from '../../Assets/viewcarousel7.png';


const ViewmoreCarousel = ({openMyModal, closeMyModal}) => {
  return (
    <>
        <div >
            <Overlay OverlayShow={true} overlayClick={true} />
            {/* <h1>This is Carousel deployment</h1> */}
            <Carousel style={{transform: openMyModal ? 'translateY(0)':'translateY(-100vh)', opacity: openMyModal ? '1':'0'}} className='viewmorecarousel' autoPlay='true' infiniteLoop='true' interval='3000' showThumbs={false}>
                <div>
                    <img src={viewcaro2} alt="appt-img" />
                </div>
                <div>
                    <img src={viewcaro1} alt="appt-img" />
                </div>
                <div>
                    <img src={viewcaro3} alt="appt-img" />
                </div>
                <div>
                    <img src={viewcaro4} alt="appt-img" />
                </div>
                <div>
                    <img src={viewcaro5} alt="appt-img" />
                </div>
                <div>
                    <img src={viewcaro6} alt="appt-img" />
                </div>
                <div>
                    <img src={viewcaro7} alt="appt-img" />
                </div> 
            </Carousel>
        </div>
    </>
  )
}

export default ViewmoreCarousel
  