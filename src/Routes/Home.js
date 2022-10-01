import Navbar from '../Components/Navbar';
import SectionPopular from '../Components/SectionPopular';
import BestSales from '../Components/BestSales';
import Slider from '../Components/Slider';


function Home() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <SectionPopular />
      <BestSales />

      
    </div>
  );
}

export default Home;