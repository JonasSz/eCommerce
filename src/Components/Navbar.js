import React, { useEffect, useRef, useState } from "react";
import DropMenu from "../Elements/DropMenu";
import Searchbar from "../Elements/Searchbar";
import ShoppingCarrtIcon from "../Elements/ShoppingCartIcon";
import Title from "../Elements/Title";

function Navbar({inShoppingCart}) {
  const style =
    "bg-slate-300 shadow-2xl bg-opacity-75 rounded-xl mx-4 mt-2 flex justify-around h-20 relative";
  const [toggle, setToggle] = useState(false);
  const SearchbarRef = useRef(null);
  const CartRef = useRef(null);
  const DropdownRef = useRef (null);
  const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {                             // Update windowsize
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }


  useEffect(() => {
    CartRef.current.style.marginBottom = '1rem';
    SearchbarRef.current.style.display = 'flex';
    SearchbarRef.current.style.marginLeft = '5%';
    SearchbarRef.current.style.marginTop = '1rem';
    SearchbarRef.current.style.width = '90%';
    CartRef.current.style.display = 'flex';

    if(toggle) {
      DropdownRef.current.style.display = 'grid';
    } else {
      DropdownRef.current.style.display = 'none';
    }

    if(windowSize.innerWidth > 850) {
      setToggle(false);
    }
  })




  return (
    <>
      <nav className={style}>
        <Title />
        <Searchbar />
        <ShoppingCarrtIcon inShoppingCart={inShoppingCart}/>
        <DropMenu toggle={toggle} setToggle={setToggle} />
      </nav>

      <div className="grid gap-10 bg-slate-300 mx-5 rounded-b-xl shadow-2xl hidden" ref={DropdownRef}>
      <Searchbar SearchbarRef={SearchbarRef} />
      <ShoppingCarrtIcon CartRef={CartRef} inShoppingCart={inShoppingCart}/>
      </div>

    </>
  );
}

export default Navbar;
