import Navbar from '../Components/Navbar';
import SectionPopular from '../Components/SectionPopular';
import BestSales from '../Components/BestSales';
import Slider from '../Components/Slider';
import Searchsite from '../Components/Searchsite';
import { useState } from 'react';


function Home({}) {

  const [isSearching, setIsSearching] = useState(false);
  return (
    <div className="App">
      <Navbar NumbOfBought={localStorage.getItem('count')} isSearching={isSearching} setIsSearching={setIsSearching}/>
      {isSearching ? <Searchsite /> : null}
      <Slider />
      <SectionPopular />
      <BestSales />

      
    </div>
  );
}

export default Home;