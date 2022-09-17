import React from 'react'
import Navbar from '../Components/Navbar';
import Product from '../Components/Product'

function ProductPage() {
  return (
    <>
    <Navbar />

    <div className="site-wrap mt-5 mx-5">
    <Product />
    <Product />
    <Product />
    <Product />
    </div>
    <div className="site-wrap mt-5 mx-5">
    <Product />
    <Product />
    <Product />
    <Product />
    </div>
    <div className="site-wrap mt-5 mx-5">
    <Product />
    <Product />
    <Product />
    <Product />
    </div>

    </>
  )
}

export default ProductPage