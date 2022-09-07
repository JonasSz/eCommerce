import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';

function ShoppingCartIcon() {
  return (
    <div className='flex justify-center items-center text-3xl'>
        <FaShoppingCart className=''/>
        <div className='text-xl mt-6 ml-10 absolute bg-slate-100 rounded-full px-2 items-center flex justify-center'>1</div>
    </div>
  )
}

export default ShoppingCartIcon