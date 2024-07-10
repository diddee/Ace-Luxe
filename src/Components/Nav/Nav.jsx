import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Logo from '../../Assets/BrightOrange 2.png'
import Hamburger from '@mui/icons-material/DensityMedium';
import CloseIcon from '../../Assets/search.png';
import Bag from '../../Assets/bag.png';
import Search from '../../Assets/search.png';

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
          <Link><img src={Search} alt="search" /></Link>
          <Link to='/Cart'>
            <img src={Bag} alt="bag" className='bag'/>
          </Link>
        </div>
        
    
    </div>
  )
}

export default Nav
