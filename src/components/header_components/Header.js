import React from 'react'
import "./header.css";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className='header_container'>
        <Link to ='/home' ><div className='logo'>EL logo</div></Link>
        <div className='header_name'>Home</div>
        <Link to='/'><div className='login_image'>login</div> </Link>
        
    </div>
  )
}

export default Header