import React, { useState } from 'react'
import "./cart.css"
import Cartheader from './Cartcomponent/Cartheader'
import Cartcontent from './Cartcomponent/Cartcontent'
// import Footer from '../../components/Footer/Footer'
// import { useCart } from '../../contexts/CartContext'



const Cart = ({cart, setCart }) => {
  // const { cart } = useCart();
  return (
    <div>  
      <Cartheader
      cart={cart}
      />
      <Cartcontent
      cart={cart}
      setCart={setCart}
       />
    </div>

  )
}

export default Cart