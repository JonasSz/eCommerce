import React from 'react';
import Kopfhörer from '../Headphones.png';

function Product() {
  return (
    <div className='bg-slate-200 max-width rounded-xl'>
        <p className='item-center flex justify-center pt-2 font-semibold text-3xl text-slate-600'>
          149€
        </p>

        <img src={Kopfhörer} alt="PIcture not available" className='h-2/6'/>

        <p className='item-center flex justify-center font-medium text-xl text-slate-700'>
          Headphones
        </p>
        <div className='site-wrap'>
        <button className='bg-slate-400 rounded-md text-lg font-semibold mt-5 mb-5 ml-2 hover:bg-slate-500 transition delay-100'>
          Kaufen
        </button>

        <button className='bg-slate-400 rounded-md text-lg font-semibold mt-5 mb-5 mr-2 hover:bg-slate-500 transition delay-100'>
          Infos
        </button>
        </div>
    </div>
  );
};

export default Product;