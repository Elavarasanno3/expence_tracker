import React from 'react'
import "./home.css"
import image from "../../images/Moneyquote.jpg"
import Header from '../../components/header_components/Header'
import LeftMenu from '../../components/left_menu_components/LeftMenu'
const Home = () => {
  return (
    <div className='home_container'>
      <Header/>
      <div className='left_right_container'>
        <LeftMenu/>
        <img src={image} alt='img'  className='image'></img>
      </div>
    </div>
  )
}

export default Home