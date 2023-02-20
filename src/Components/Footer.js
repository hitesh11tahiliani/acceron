import React from 'react'
import '../Styles/Footer.css'
import Quotation from './Quotation';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='footer_flex'>
        <div className='left_column_footer'>
            <h3 className='acceron_footer'>ACCERON</h3>
            <a href="/"><h3 className='pages_footer'>Home</h3></a>
            <a href="/products"><h3 className='pages_footer'>Products</h3></a>
            <a href="/about"><h3 className='pages_footer'>About</h3></a>
            <a href="/quotation"><h3 className='pages_footer'>Get Quotation</h3></a>
        </div>
        <div className='right_column_footer'>
            <h2 className='footer_sub_heading'>Head Office</h2>
            <p className='footer_info'>Address : 22-5-326, FB LANE, CHARMINAR EAST, HYDERABAD, 500002 </p>
            <h2 className='footer_sub_heading'>Corporate Office</h2>
            <p className='footer_info'>Address : 63/A, INDUSTRIAL AREA, ROAD NO - 8, GOVINDPURA, BHOPAL 462023</p>
            <h2 className='footer_sub_heading'>Production Facility - 1</h2>
            <p className='footer_info'>Address : 22-5-326, FB LANE, CHARMINAR EAST, HYDERABAD, 500002 </p>
            <h2 className='footer_sub_heading'>Production Facility - 2</h2>
            <p className='footer_info'>Address : 16, SAKET INDUSTRIAL ESTATE, CHANGODAR, AHMEDABAD, 382213 </p>
        </div>
        </div>

        <div className='copyright'></div>
        <span className='copyright_footer'>Copyrights © 2023 | Acceron Industries India Pvt Ltd.</span>
    </div>
    </>
  )
}

export default Footer