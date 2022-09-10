import React from 'react';
import Kopfhörer from '../Headphones.png';

function Product() {
  return (
    <div className='bg-slate-200 w-full h-full rounded-xl shadow-xl'>
        <p className=' flex justify-center pt-2 font-semibold text-3xl text-slate-600'>
          149€
        </p>

        <img src={Kopfhörer} alt="Picture not available" className=' relative'/>

        <p className=' flex justify-center font-medium text-xl text-slate-700'>
          Headphones
        </p>
        <div className='buttons-wrap mb-4'>
        <button className='bg-slate-400 rounded-md text-lg font-semibold mt-5 ml-2 mr-2 hover:bg-slate-500 transition delay-50'>
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