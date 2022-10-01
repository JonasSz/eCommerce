import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import Product from '../Components/Product';
import { LaptopsData } from '../Data/LaptopsData'


function Laptops() {
  const [inShoppingCart, setInShoppingCart] = useState(0);
  const listHandys = LaptopsData.map((data) => <Product rounded='h-96 relative' classname='bg-slate-100 laptops-responsive w-full h-full rounded-xl shadow-xl' setInShoppingCart={setInShoppingCart} inShoppingCart={inShoppingCart} src={data.src} text={data.title} price={data.price}/>)


  return (
    <>
    <Navbar inShoppingCart={inShoppingCart}/>

    <div className="laptops-wrap mt-5 mx-5">
      {listHandys}

    </div>


    </>
  )
}

export default Laptops