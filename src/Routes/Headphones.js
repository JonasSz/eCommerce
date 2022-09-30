import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import Product from '../Components/Product';
import { HeadphonesData } from '../Data/HeadphonesData'



function Headphones() {
  const [inShoppingCart, setInShoppingCart] = useState(0);
  const listHeadphones = HeadphonesData.map((data) => <Product rounded='h-96 relative' classname='bg-white w-full h-full rounded-xl shadow-xl' setInShoppingCart={setInShoppingCart} inShoppingCart={inShoppingCart} src={data.src} text={data.title} price={data.price}/>)


  return (
    <div className='bg-slate-600'>
    <Navbar inShoppingCart={inShoppingCart}/>

    <div className="site-wrap mt-5 mx-5">
      {listHeadphones}

    </div>


    </div>
  )
}

export default Headphones