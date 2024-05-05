import React from 'react'
import "./reports.css"
import Header from '../../components/header_components/Header'
import LeftMenu from '../../components/left_menu_components/LeftMenu'
const Reports = () => {
  return (
    <div className='reports_container'>
    <Header/>
    <div className='left_right_reports_container'>
      <LeftMenu/>
      <p>Reports</p>
    </div>
  </div>
  )
}

export default Reports