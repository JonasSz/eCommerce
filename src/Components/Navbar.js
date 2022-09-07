import React from 'react';
import Searchbar from '../Elements/Searchbar';
import ShoppingCarrtIcon from '../Elements/ShoppingCartIcon';

function Profile() {

  const style = 'bg-slate-300 shadow-2xl bg-opacity-75 rounded-xl mx-4 mt-2 flex justify-around h-20 sticky'


  return (
    <nav className={style}>
        <Searchbar />
        <ShoppingCarrtIcon />
    </nav>
  )
}

export default Profile