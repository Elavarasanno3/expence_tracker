import React from 'react'
import "./add.css"
import WalletIcon from '@mui/icons-material/Wallet';
import PaymentsIcon from '@mui/icons-material/Payments';
import PaidIcon from '@mui/icons-material/Paid';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { AddCircle,CarCrash,AirplanemodeActive, CastForEducation, ChildCare, FoodBank, HealthAndSafety, Home, Pets, Phone, ShoppingCart, TravelExplore, AirportShuttle, Chair, Coffee, DirectionsCar, FamilyRestroom, FitnessCenter, Savings, AddBox } from '@mui/icons-material';
import AddCardIcon from '@mui/icons-material/AddCard';
import Header from "../../components/header_components/Header"
import LeftMenu from "../../components/left_menu_components/LeftMenu"
const Add = () => {
  return (
    <div className='add_container'>
      <div>
        <Header/>
      </div>
      <div className='add_left_right_container'>
        <LeftMenu/>
        <div className='add_main_page'>
        <div className='income-container'>
        <WalletIcon/>
        <PaymentsIcon/>
        <PaidIcon/>
        <CurrencyExchangeIcon/>
        <CurrencyRupeeIcon/>
        <AddCircle/>
      </div>
      <div className='expence-container'>
        <ShoppingCart/>
        <FoodBank/>
        <Phone/>
        <AirplanemodeActive/>
        <CastForEducation/>
        <HealthAndSafety/>
        <DirectionsCar/>
        <Pets/>
        <Chair/>
        <Coffee/>
        <FamilyRestroom/>
        <FitnessCenter/>
        <Savings/>
        <AddBox/>
      </div>
        </div>
      </div>
      
    </div>
  )
}

export default Add