import React, { useEffect, useState } from 'react';
import UltimativerKlang from "../Pictures/SliderPics/Ultimativer-Klang.png";
import LaptopsSlider from "../Pictures/SliderPics/LaptopSlider2.jpg";
import TabletSlider from "../Pictures/SliderPics/TabletSlider2.jpg";
import HandySlider from "../Pictures/SliderPics/HandySlider.png";
import SliderBtn from '../Elements/SliderBtn';
import { CgArrowRightO } from 'react-icons/cg';
import { CgArrowLeftO } from 'react-icons/cg';

function Slider() {
    const SliderPictures = [UltimativerKlang, LaptopsSlider, TabletSlider, HandySlider];
    const [SliderPicNumber, setSliderPicNumber] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setSliderPicNumber(setSliderPicNumber => setSliderPicNumber + 1);
      }, 5000);
      return () => clearInterval(interval);
    }, []);



    if(SliderPicNumber === 4){
      setSliderPicNumber(() => 0);
    } 
    if(SliderPicNumber === -1){
      setSliderPicNumber(() => 3);
    } 

  return (
    <div className='mt-5 flex justify-center relative'>
              <a href={
                SliderPicNumber === 0 ? '/Kopfhoerer' : (
                  SliderPicNumber === 1 ? '/Laptops' : (
                    SliderPicNumber === 2 ? '/Tablets' : (
                      SliderPicNumber === 3 ? '/Handys' : null
                    )
                  )
                )
              } className='image-width relative hover:cursor-pointer'>
              <img src={SliderPictures[SliderPicNumber]} className='rounded-2xl shadow-2xl'/>
              </a>


        <SliderBtn value='increase' ArrowIcon={<CgArrowLeftO/>} style='text-buttonsFont absolute z-10 mt-half mr-edge' count={setSliderPicNumber} counter={SliderPicNumber} />
        <SliderBtn value='add' ArrowIcon={<CgArrowRightO/>} style=' text-buttonsFont absolute z-10 mt-half ml-edge' count={setSliderPicNumber} counter={SliderPicNumber}/>


    </div>
  )
}

export default Slider