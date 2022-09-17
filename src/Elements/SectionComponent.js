import React from 'react'

function SectionComponent({href, src, title}) {
  return (
    <div className='bg-slate-300 w-full h-full rounded-xl shadow-xl  hover:bg-slate-400 transition delay-100'>
        <h1 className='flex justify-center pt-2 font-semibold text-3xl text-slate-600'>
          {title}
        </h1>

        <a href={href} className=''>
        <img src={src} className=' relative'/>
        </a>


    </div>
  )
}

export default SectionComponent