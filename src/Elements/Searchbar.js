import React, { useEffect, useRef, useState } from "react";
import { ImSearch } from "react-icons/im";
import Searchsite from "../Components/Searchsite";

function Searchbar({SearchbarRef, setIsSearching, isSearching}) {

  const inputRef = useRef(null);
  const [searchValue, setSearchValue] = useState('');
  const searchProducts = (event) => {
    setSearchValue(event.target.value);
    // {inputRef.current.value > 0 ? setIsSearching(true) : setIsSearching(false)}
  }




  const style = "sb rounded-l-md h-10 outline-slate-400 font-sans";

  return (
    <>
      <div className="flex justify-center items-center w-6/12 searchbar" ref={SearchbarRef}>
        <input ref={inputRef} type="text" placeholder='Suche nach einem Produkt' className={style} onChange={searchProducts} />
        <ImSearch className="text-4xl bg-slate-400 h-10 px-1 rounded-r-md" />
      </div>
    </>
  );
}

export default Searchbar;
