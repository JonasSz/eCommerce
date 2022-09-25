import React from 'react'
import Navbar from '../Components/Navbar';
import Product from '../Components/Product'
import { HandypageData } from '../Data/Handypage';



function ProductPage() {
  return (
    <>
    <Navbar />

    <div className="site-wrap mt-5 mx-5">
      {HandypageData.map((data) => {
          return <Product src={data.src} text={data.text} price={data.price}/>
      })}

    </div>
    <div className="site-wrap mt-5 mx-5">

    </div>
    <div className="site-wrap mt-5 mx-5">

    </div>

    </>
  )
}

export default ProductPage