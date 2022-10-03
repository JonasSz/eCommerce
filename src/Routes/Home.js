import Navbar from '../Components/Navbar';
import SectionPopular from '../Components/SectionPopular';
import BestSales from '../Components/BestSales';
import Slider from '../Components/Slider';
import Searchsite from '../Components/Searchsite';
import { useState } from 'react';


function Home({}) {

  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState('');


  return (
    <div className="App">
      <Navbar NumbOfBought={localStorage.getItem('count')} searchValue={searchValue} setIsSearching={setIsSearching} isSearching={isSearching} setSearchValue={setSearchValue} />
      {isSearching ? <Searchsite searchValue={searchValue}/> : null}
      <Slider />
      <SectionPopular />
      <BestSales />

      
    </div>
  );
}

export default Home;