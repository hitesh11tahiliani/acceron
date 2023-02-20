import React from 'react'
import '../Styles/About.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Manager from '../Assets/senior_general_manager.png';
import Ceo from '../Assets/ceo.png';
import Director from '../Assets/director.png';
import Office from '../Assets/office.png';
import ProductionOne from '../Assets/production1.png';
import ProductionTwo from '../Assets/production2.png';


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
            <div className='heading_address_office'>Main Office</div>
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
            <img className='image_production' src={ProductionOne} alt="office"></img>
            <div className='faculty_info'><u>Address</u> : 22-5-326, FB LANE, CHARMINAR EAST, HYDERABAD, 500002</div>
          </div> 
          <div className='production_image'>
            <img className='image_production' src={ProductionTwo} alt="office"></img>
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
            <img className='image_ceo' src={Ceo} alt="Ceo"></img>
            <p className='designation'>Mr. Ashish Mathur<br/> CEO </p>
          </div>
          <div className='slide_one'>
            <img src={Director} alt="Leadership"></img>
            <p className='designation'>Mr. Rajneesh Yadav <br/> Director </p>
          </div>
          <div className='slide_one'>
            <img src={Manager} alt="Leadership"></img>
            <p className='designation'>Mr. Rahul Kaushik <br/> Senior General Manager </p>
          </div>
          
        </Carousel>
      </div>
    </div>

    </div>
  )
}

export default About