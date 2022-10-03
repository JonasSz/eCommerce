import React, { useEffect, useRef, useState } from "react";
import { ImSearch } from "react-icons/im";
import Searchsite from "../Components/Searchsite";

function Searchbar({SearchbarRef, setIsSearching, setSearchValue, searchValue}) {

  const inputRef = useRef(null);

  const searchProducts = (event) => {
    setSearchValue(event.target.value);
  }





  const style = "sb rounded-l-md h-10 outline-slate-400 font-sans";

  return (
    <>
      <div className="flex justify-center items-center w-6/12 searchbar" ref={SearchbarRef}>
        <input ref={inputRef} type="text" placeholder='Suche nach einem Produkt' className={style} onChange={searchProducts} onFocus={() => setIsSearching(true)} onBlur={() => setIsSearching(false)}/>
        <ImSearch className="text-4xl bg-slate-400 h-10 px-1 rounded-r-md" />
      </div>
    </>
  );
}

export default Searchbar;
