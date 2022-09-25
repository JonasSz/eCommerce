import React from 'react'
import Navbar from '../Components/Navbar';
import Product from '../Components/Product';
import { HandyPageData } from '../Data/HandyPageData'



function ProductPage() {
  const listHandys = HandyPageData.map((data) => <Product src={data.src} text={data.title} price={data.price}/>)


  return (
    <>
    <Navbar />

    <div className="site-wrap mt-5 mx-5">
      {listHandys}

    </div>
    <div className="site-wrap mt-5 mx-5">

    </div>
    <div className="site-wrap mt-5 mx-5">

    </div>

    </>
  )
}

export default ProductPage