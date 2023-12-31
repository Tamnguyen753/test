import React from 'react'
import { Link } from "react-router-dom";

function Cartheader(cart) {
  return (
    <div className='Cart-header'>
   <Link to="/"><img src='logo-colored.png' /></Link>
   <div className='cart-icon'>
   <Link to="/"><img src='Profile.png' /></Link>
   <Link to="/"><img src='Message.png' /></Link>
   <Link to="/"><img src='Orders.png' /></Link>
   <Link to="/cart"><img src='Cart.png' /></Link>
   <p>{cart.length}</p>
   </div>

    </div>
  )
}

export default Cartheader