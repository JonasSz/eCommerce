import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'

function DropMenu({setToggle, toggle}) {
  return (
    <button onClick={() => setToggle(!toggle)} className='hamburger-menu hidden mt-5 transition-all delay-100 text-2xl pl-3 w-12 rounded-full h-12 hover:bg-slate-400'><GiHamburgerMenu/></button>
  )
}

export default DropMenu