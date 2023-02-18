import React from 'react'
import '../Styles/Home.css'
import Banner from "../Assets/banner1.png"
import User1 from "../Assets/USER1.png"
import User3 from "../Assets/USER3.png"
import tagline from "../Assets/acceron_branding.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaAddressCard, FaClock, FaNetworkWired, FaCalendarTimes, FaWalking, FaQuoteRight, FaQuoteLeft} from "react-icons/fa";
import slide_one from "../Assets/fork_oil.png"
import slide_two from "../Assets/1l_conc_coolant.png"
import slide_three from "../Assets/1l_90.png"


function Home() {
  return (
    <div className="home_page">
      
      
      {/* landing page  */}
      <div className='home_screen1'>
        <div className='landing_screen'>
          <div className='poster'>
            <img className='banner' src={Banner} alt="Banner" />
          </div>

          <div className='company_tagline'>
            <img className='image_tagline' src={tagline} alt="tagline" />

            
            
            {/* <div className="home_carousel ">
              <Carousel autoPlay infiniteLoop interval={2500} showStatus={false} showThumbs={false} showArrows={false}>
                <div className="card_home_carousel">
                    <img className="img_carousel" src={slide_one} alt="" />
                </div>
                <div className="card_home_carousel">
                  <img src={slide_two} alt="" />
                </div>
                <div className="card_home_carousel">
                  <img src={slide_three} alt="" />  
                </div>
              </Carousel>
            </div> */}

          </div>
        </div>

        <div className='reach'>
          <div className='reach_info'>
            <p className="reach_sub_info">
              2 Production Units
            </p>
          </div>

          <div className='reach_info'>
            <p className="reach_sub_info">
            100+ Distributors
            </p>
          </div>

          <div className='reach_info'>
            <p className="reach_sub_info">
            Millions of Users
            </p>
          </div>
        </div>
      </div>

      {/* Automotive Lubricant  */}
      <div className='automotive_lubricant'>
        <div className='content_lubricant'>
          <div className='heading_automotive_lubricant'>Automotive Lubricants</div>
          <p className='border_bottom_heading'></p>
          <div className='automotive_description'>Acceron Industries
            India Private Limited is a trusted provider of wide range of
            Engine Oils, Gear Oils, Greases and other fluid and lubes.
            Blended with our advanced additives technologies, every 
            product is designed to enhance performance, reliability 
            and longevity for your use. </div>
        </div>
        <button className='btn_product_range'><p className='btn_text_product_range' >Product Range</p></button>
      </div>

    {/* Vision and values */}
    <div className='vision_n_values'>

      <div className='vision'>
        <div className="vision_heading">Vision</div>
        <div className='border_bottom'></div>
        <div className='vision_box'>
          <div className='vision_content'><p>To become the <i>FASTEST</i> <i>GROWING</i> Indian lubricant company.</p></div>
        </div>
        
      </div>

      <div className='values'>
        <div className="values_heading">Values</div>
        <div className='border_bottom'></div>
          <div className="values_content">
            <div  className='row_values'>
              <div><FaAddressCard className='icon'/></div>
              <div>
                <div className='subheading_values'>Innovation</div>
                <div className=''>Driving not just product  ideas but also innovation in terms of process.</div>
              </div>
            </div>
            

            <div className='row_values'>
              <div><FaClock className='icon'/></div>
              <div>
                <div className='subheading_values'>Responsiveness</div>
                <div className=''>Towards employees, customers and all other stakeholders.</div>
              </div>
            </div>

            <div className='row_values'>
              <div><FaNetworkWired className='icon'/></div>
              <div>
                <div className='subheading_values'>Ownership</div>
                <div className=''>Where the vision becomes not just the company goal but the individual goal as well.</div>
              </div>
            </div>

            <div className='row_values'>
              <div><FaCalendarTimes className='icon'/></div>
              <div>
                <div className='subheading_values'>Performance driven</div>
                <div className=''>Rewarding performers across verticals, thereby setting examples for leadership.</div>
              </div>
            </div>

            <div className='row_values'>
              <div><FaWalking className='icon'/></div>
              <div>
                <div className='subheading_values'>Agility</div>
                <div className=''>Change is constant. This equips the organization to respond rapidly to this dynamic world</div>
              </div>
            </div>
            
          </div>
      </div>
    </div>
    
    {/* testimonial */}
    <div className='reviews'>
      <div className='container_reviews'>
        <div className='left-column'>
          <div className='bi-quote'><FaQuoteLeft/></div>
          <div className='left-text'>What our customers say...</div>
          <div className='bi-quote'><FaQuoteRight/></div>
        </div>

        <div className='column-right'>
          <div className='card'>
            <div className='user'>
              <div className='user-photo'><img className='img-user' src={User1} alt="User"/> </div>
              <div className='user-name'>Rohit Roy</div>
            </div>
            <div className='review-text'>"I recently switched to this engine oil and it has greatly improved my car's performance. The smooth running and increased efficiency are noticeable. It's made with high-quality ingredients and is affordably priced. I highly recommend it for all car owners looking to enhance their vehicle's performance."</div>
            <div className='position'><i>Software Engineer<br/>President Systems </i></div>
          </div>
          
          <div className='card'>
            <div className='user'>
              <div className='user-photo'><img className='img-user' src={User3} alt="User"/> </div>
              <div className='user-name'>Rishi Jain</div>
            </div>
            <div className='review-text'>"I have been using this engine oil for the past few months and my car runs smoother and more efficiently. The extended drain interval saves me time and money. I am extremely satisfied with this product and would highly recommend it to anyone looking for a reliable and effective engine oil."</div>
            <div className='position'><i>Cheif Analyst<br/>Micro Tech Solutions </i></div>
          </div>
        </div>

      </div>
    </div>

  </div>
  )
}

export default Home