import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Logo from '../../Assets/BrightOrange 2.png'
import SearchIcon from '@mui/icons-material/Search';
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Hamburger from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBagRounded';
import './Nav.css'

function Nav() {

  
  const[clicked, isClicked] = useState(false)

  const handleClicked = () => {
    isClicked (!clicked);

  }

  return (
    <div className='header'>
        
        <div className='icon' clicked={clicked} isClicked={isClicked}>
          {!clicked ? (
            <Hamburger fontSize="medium" onClick={handleClicked} />
          ) : (
            <CloseIcon fontSize="medium" onClick={handleClicked}/>
          ) }
        </div>
        
        <img src={Logo} alt="brand logo" className='logo'/>
        
        <ul className= {clicked ? "nav" : "nav active"}>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Categories</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
        <div className="icons">
          <SearchIcon fontSize="medium" />
          <Link to='/Cart'>
            <ShoppingBagIcon fontSize="medium" />
          </Link>
        </div>
        
    
    </div>
  )
}

export default Nav
