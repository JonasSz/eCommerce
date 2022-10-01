import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar';
import Product from '../Components/Product';
import { LaptopsData } from '../Data/LaptopsData'


function Laptops() {
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


  const listHandys = LaptopsData.map((data) => <Product increase={increase} rounded='h-96 relative' classname='bg-slate-100 laptops-responsive w-full h-full rounded-xl shadow-xl' src={data.src} text={data.title} price={data.price}/>)


  return (
    <>
    <Navbar NumbOfBought={count}/>

    <div className="laptops-wrap mt-5 mx-5">
      {listHandys}

    </div>


    </>
  )
}

export default Laptops