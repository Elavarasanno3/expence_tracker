import React from 'react'
import "./income.css"
import Header from '../../components/header_components/Header'
import LeftMenu from '../../components/left_menu_components/LeftMenu'

const Income = () => {
  return (
    <div className='income_container'>
    <Header/>
    <div className='left_right_income_container'>
      <LeftMenu/>
      <p>Income</p>
    </div>
  </div>
  )
}

export default Income