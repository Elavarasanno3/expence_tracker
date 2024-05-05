import React from 'react'
import "./records.css"
import Header from '../../components/header_components/Header'
import LeftMenu from '../../components/left_menu_components/LeftMenu'
const Records = () => {
  return (
    <div className='records_container'>
    <Header/>
    <div className='left_right_records_container'>
      <LeftMenu/>
      <p>Records</p>
    </div>
  </div>
  )
}

export default Records