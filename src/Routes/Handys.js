import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar';
import Product from '../Components/Product';
import { HandyPageData } from '../Data/HandyPageData'



function ProductPage ({inShoppingCart, setInShoppingCart}) {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(prevCount => {
      const newCount = Number(prevCount) + 1;
      localStorage.setItem("count", newCount);
      return newCount;
    });
  };

  useEffect(() => {
    const initialValue = localStorage.getItem("count");
    if (initialValue) setCount(initialValue);
  }, []);


  const listHandys = HandyPageData.map((data) => <Product increase={increase} rounded='h-96 relative picture-round' classname='bg-slate-300 w-full h-full rounded-xl shadow-xl'  src={data.src} text={data.title} price={data.price}/>)


  return (
    <>
    <Navbar NumbOfBought={count}/>

    <div className="site-wrap mt-5 mx-5">
      {listHandys}

    </div>


    </>
  )
}

export default ProductPage