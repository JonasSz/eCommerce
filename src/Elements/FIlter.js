import React from 'react'

function FIlter({Product, searchValue}) {
  return (
    <>
    {Product.filter((data) => {
        if (searchValue == "") {
          return data;
        } else if (
          data.title.toLowerCase().includes(searchValue.toLowerCase())
        ) {
          return data;
        }
      }).map((data) => {
        return (
          <div className="mt-2 bg-slate-300 h-66 rounded-xl mx-4 flex columns-1 searchResultGrid shadow-xl">
            <img
              className="h-36 py-2 ml-4 px-4 rounded-2xl bg-slate-100 relative"
              src={data.src}
              alt="Check your Internet"
            />
             <h1 className='relative text-2vw ml-half font-semibold'>{data.title}</h1>
            <strong className="absolute text-4xl mt-20 bg-slate-400 rounded-xl ml-50vw">
              {data.price}€
            </strong>
          </div>
        );
      })}
    </>
  )
}

export default FIlter