import React, { useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa';

function ShoppingCartIcon({CartRef, NumbOfBought }) {

  
  return (
    <button className='flex justify-center items-center text-3xl shopping-cart' ref={CartRef}>
        <FaShoppingCart className=''/>
        <div className='text-xl mt-6 ml-10 absolute bg-slate-100 rounded-full px-2 items-center flex justify-center'>{NumbOfBought}</div>
    </button>
  )
}

export default ShoppingCartIcon