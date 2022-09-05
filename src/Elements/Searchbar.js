import React from "react";
import { ImSearch } from "react-icons/im";

function Searchbar() {

  const style = "searchbar rounded-l-md h-10 outline-slate-400 font-sans";

  return (
    <>
      <div className="flex justify-center items-center  w-6/12">
        <input type="text" className={style} />
        <ImSearch className="text-4xl bg-slate-400 h-10 px-1 rounded-r-md" />
      </div>
    </>
  );
}

export default Searchbar;
