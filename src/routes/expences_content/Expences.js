import React from 'react'
import "./expences.css"
import Header from '../../components/header_components/Header'
import LeftMenu from '../../components/left_menu_components/LeftMenu'
const Expences = () => {
  return (
    <div className='expences_container'>
    <Header/>
    <div className='left_right_expences_container'>
      <LeftMenu/>
      <p>Expences</p>
    </div>
  </div>
  )
}

export default Expences