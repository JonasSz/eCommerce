import React, { useEffect, useState } from 'react';

function Product({src, text, price, classname, rounded, increase}) {




  return (
    <div className={classname}>
        <p className='flex justify-center pt-2 font-semibold text-3xl text-slate-600'>
          {price}€
        </p>

        <div className='flex justify-center'>
        <img src={src} alt="Picture not available" className={rounded} />
        </div>


        <p className=' flex justify-center font-medium text-xl text-slate-700'>
          {text}
        </p>
        <div className='buttons-wrap mb-4'>
        <button onClick={increase} className='bg-slate-400 rounded-md text-lg font-semibold mt-5 ml-2 mr-2 hover:bg-slate-500 transition delay-50'>
          Kaufen
        </button>

        <button className='bg-slate-400 rounded-md text-lg font-semibold mt-5 mr-2 ml-2 hover:bg-slate-500 transition delay-50'>
          Infos
        </button>
        </div>
    </div>
  );
};

export default Product;