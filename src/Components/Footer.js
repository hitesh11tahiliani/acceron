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
            <h3 className='pages_footer'>Home</h3>
            <h3 className='pages_footer'>Products</h3>
            <h3 className='pages_footer'>About</h3>
            <h3 className='pages_footer'>Get Quotation</h3>
        </div>
        <div className='right_column_footer'>
            <h2 className='footer_sub_heading'>Head Office</h2>
            <p className='footer_info'>Address : 22-5-326, FB LANE, CHARMINAR EAST, HYDERABAD, Telangana 500002 </p>
            <h2 className='footer_sub_heading'>Production Facilitie</h2>
            <p className='footer_info'>Address : 22-5-326, FB LANE, CHARMINAR EAST, HYDERABAD, Telangana 500002 </p>
            <h2 className='footer_sub_heading'>Production Facilitie</h2>
            <p className='footer_info'>Address : 16, SAKET INDUSTRIAL ESTATE, CHANGODAR, AHMEDABAD, GUJARAT 382213 </p>
        </div>
        </div>

        <div className='copyright'></div>
        <span className='copyright_footer'>Copyrights reserved © 2023 | Acceron India Pvt Ltd.</span>
    </div>
    </>
  )
}

export default Footer