import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar';
import Product from '../Components/Product';
import { HeadphonesData } from '../Data/HeadphonesData'



function Headphones() {
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

  const listHeadphones = HeadphonesData.map((data) => <Product increase={increase} rounded='h-96 relative' classname='bg-white w-full h-full rounded-xl shadow-xl' src={data.src} text={data.title} price={data.price}/>)


  return (
    <div className='bg-slate-600'>
    <Navbar NumbOfBought={count}/>

    <div className="site-wrap mt-5 mx-5">
      {listHeadphones}

    </div>


    </div>
  )
}

export default Headphones