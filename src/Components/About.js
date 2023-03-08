import React from 'react'
import '../Styles/About.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Manager from '../Assets/senior_general_manager.png';
import Ceo from '../Assets/ceo.png';
import Director from '../Assets/director.png';
import Office from '../Assets/office.png';
import video1 from '../Assets/video1.mp4';
import video2 from '../Assets/video2.mp4';

import sales1 from '../Assets/sales/sales1.png';
import sales2 from '../Assets/sales/sales2.png';
import sales3 from '../Assets/sales/sales3.png';
import sales4 from '../Assets/sales/sales4.png';
import sales5 from '../Assets/sales/sales5.png';
import sales6 from '../Assets/sales/sales6.png';
import sales7 from '../Assets/sales/sales7.png';
import sales8 from '../Assets/sales/sales8.png';
import sales9 from '../Assets/sales/sales9.png';
import sales10 from '../Assets/sales/sales10.png';


function About() {
  return (
    <div>
    
    <div>
      <div className='head-office'>
        <div className='about_heading'>Head Office</div>
        <div className='heading_underline'></div>
        <div className='component_office'>
          <img className='image_office' src={Office} alt="office"></img>
          <div>
            <div className='heading_address_office'>Head Office</div>
            <div className='office_info'><u>Address</u> : 22-5-326, FB LANE, CHARMINAR EAST, HYDERABAD, 500002 <br/> </div>
            <div className='heading_corporate_office'>Corporate Office</div>
            <div className='office_info'><u>Address</u> : 63/A, INDUSTRIAL AREA, ROAD NO - 8, GOVINDPURA, BHOPAL, 462023 <br/> </div>
          </div>
        </div> 
      </div>
    </div>

    <div>
      <div className='production_facilites'>
        <div className='about_heading'>Production Facilities</div>
        <div className='heading_underline'></div>
        <span className='production_facilites_card' >
          <div className='production_image'>
            {/* <img className='image_production' src={ProductionOne} alt="office"></img> */}
            <video controls>
              <source className='image_production' src={video1} type="video/mp4" />
            </video>
            <div className='faculty_info'><u>Address</u> : 22-5-326, FB LANE, CHARMINAR EAST, HYDERABAD, 500002</div>
          </div> 
          <div className='production_image'>
            {/* <img className='image_production' src={ProductionTwo} alt="office"></img> */}
            <video className='image_production' controls>
              <source  src={video2} type="video/mp4" />
            </video>
            <div className='faculty_info'><u>Address</u> : 16, SAKET INDUSTRIAL ESTATE, CHANGODAR, AHMEDABAD, 382213</div>
          </div>
        </span>
         
      </div>
    </div>

    <div className='about'>
      <div className='management'>
        <div className='about_heading'>Senior Management</div>
        <div className='heading_underline'></div>
        <Carousel autoPlay infiniteLoop interval={2500} showStatus={false} showThumbs={false} showArrows={false} >
        <div className='slide_one'>
            <img src={Director} alt="Leadership"></img>
            <p className='designation'>Mr. Rajneesh Yadav <br/> Director </p>
          </div>
          <div className='slide_one'>
            <img className='image_ceo' src={Ceo} alt="Ceo"></img>
            <p className='designation'>Mr. Ashish Mathur<br/> CEO </p>
          </div>
          <div className='slide_one'>
            <img src={Manager} alt="Leadership"></img>
            <p className='designation'>Mr. Rahul Kaushik <br/> Vice President </p>
          </div>
        </Carousel>
      </div>
    </div>

    <div>
      <div className='about_heading'>Sales, Marketing and PR</div>
      <div className='heading_underline'></div>
      <div className='sales'>
        <img className='salesGrid' src={sales1} alt="sales"></img>
        <img className='salesGrid' src={sales2} alt="sales"></img>
        <img className='salesGrid' src={sales3} alt="sales"></img>
        <img className='salesGrid' src={sales4} alt="sales"></img>
        <img className='salesGrid' src={sales5} alt="sales"></img>
        <img className='salesGrid' src={sales6} alt="sales"></img>
        <img className='salesGrid' src={sales7} alt="sales"></img>
        <img className='salesGrid' src={sales8} alt="sales"></img>
        <img className='salesGrid' src={sales9} alt="sales"></img>
        <img className='salesGrid' src={sales10} alt="sales"></img>
      </div>
    </div>
    </div>
  )
}

export default About