import React from 'react'
import '../Styles/Navbar.css'
import Logo from "../Assets/logo.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div className='navbar'>
            <div >
                <img className='logo' src={Logo} alt="logo" />
            </div>
            <div className='pages'>
                <Link className='page' to='/' >Home</Link>
                <Link className='page' to='/products' >Products</Link>
                <Link className='page' to='/about' >About</Link>
                <Link className='page' to='/quotation' >Quotation</Link>
            </div>
      </div>
    </div>
  )
}

export default Navbar