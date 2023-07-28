import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../images/apple logo.png';
import img2 from '../images/eight.png'
import img3 from '../images/one.png'
import img4 from '../images/ten.png'
import img5 from '../images/Amazon-Logo.png'
import img6 from '../images/wipro logo.png'
import img7 from '../images/infosys logo.png'

const Img = () => {
  return (
    <div>
      <Marquee  className='marquee'>
            <div className='image-wrapper'>
                <img src={img1} alt="logo" />
            </div>
            <div className='image-wrapper'>
                <img src={img2} alt="logo" />
            </div>
            <div className='image-wrapper'>
                <img src={img3} alt="logo" />
            </div>
            <div className='image-wrapper'>
                <img src={img4} alt="logo" />
            </div>
            <div className='image-wrapper'>
                <img src={img5} alt="logo" />
            </div>
            <div className='image-wrapper'>
                <img src={img6} alt="logo" />
            </div>
            <div className='image-wrapper'>
                <img src={img7} alt="logo" />
            </div>
      </Marquee>
    </div>
  );
}

export default Img;
