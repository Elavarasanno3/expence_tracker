import React from 'react'
import "./balance.css"
import Header from '../../components/header_components/Header'
import LeftMenu from '../../components/left_menu_components/LeftMenu'

const Balance = () => {
  return (
    <div className='balance_container'>
      <Header/>
      <div className='left_right_balance_container'>
        <LeftMenu/>
        <p>Balance</p>
      </div>
    </div>
  )
}

export default Balance