import React from 'react'
import Logo from '../../Assets/BrightOrange 2.png'
import './Nav.css'


const Header = () => {
  return (
    <div className='header'>
        
        <img src={Logo} alt="brand logo" className='logo'/>
        
        <div className="nav">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Categories</a>
            <a href="/">Contact</a>
        </div>
        <div className="icons">
            <span className="search-icon">🔍</span>
            <span className="cart-icon">🛒</span>
            <span className="cart-icon"></span>

        </div>
    
    </div>
  )
}

export default Header
