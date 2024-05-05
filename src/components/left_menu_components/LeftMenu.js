import React from 'react'
import "./left_menu.css"
import { Link } from 'react-router-dom'

const LeftMenu = () => {
  return (
    <div className='left_menu_container' >
      <Link className='menu_items' to="/add">
        <div className='add_record'>ADD</div>
      </Link>
      <Link className='menu_items' to="/balance">
        <div className='balance'>BALANCE</div>      
      </Link>
      <Link className='menu_items' to="/expences">
        <div className='expences'>EXPENCES</div>      
      </Link>
      <Link className='menu_items' to="/incomes">
        <div className='incomes'>INCOMES</div>      
      </Link>
      <Link className='menu_items' to="/records">
        <div className='records'>RECORDS</div>      
      </Link>
      <Link className='menu_items' to='/reports'>
        <div className='menu_items reports'>REPORTS</div>
      </Link>        
    </div>
  )
}

export default LeftMenu;