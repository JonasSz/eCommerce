import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import Product from '../Components/Product';
import { HandyPageData } from '../Data/HandyPageData'



function ProductPage() {
  const [inShoppingCart, setInShoppingCart] = useState(0);
  const listHandys = HandyPageData.map((data) => <Product classname='bg-slate-200 w-full h-full rounded-xl shadow-xl' setInShoppingCart={setInShoppingCart} inShoppingCart={inShoppingCart} src={data.src} text={data.title} price={data.price}/>)


  return (
    <>
    <Navbar inShoppingCart={inShoppingCart}/>

    <div className="site-wrap mt-5 mx-5">
      {listHandys}

    </div>


    </>
  )
}

export default ProductPage