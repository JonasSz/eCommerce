import React, { useEffect, useState } from 'react';
import UltimativerKlang from "../Pictures/SliderPics/Ultimativer-Klang.png";
import ChairSlider from "../Pictures/SliderPics/ChairSlider.png";
import EchoFamily from "../Pictures/SliderPics/Echo-Family.png";
import HandySlider from "../Pictures/SliderPics/HandySlider.png";
import SliderBtn from '../Elements/SliderBtn';
import { CgArrowRightO } from 'react-icons/cg';
import { CgArrowLeftO } from 'react-icons/cg';

function Slider() {
    const SliderPictures = [UltimativerKlang, ChairSlider, EchoFamily, HandySlider];
    const [SliderPicNumber, setSliderPicNumber] = useState(0);
    const [buttonClicked, setButtonClicked] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
         setSliderPicNumber(SliderPicNumber + 1)
      }, 5000);
      return () => clearInterval(interval);
    }, [buttonClicked]);



    if(SliderPicNumber === 4){
      setSliderPicNumber(() => 0);
    } 
    if(SliderPicNumber === -1){
      setSliderPicNumber(() => 3);
    } 

  return (
    <div className='mt-5 flex justify-center'>
              <a href="/" className='image-width absolute hover:cursor-pointer'>
              <img src={SliderPictures[SliderPicNumber]} className='rounded-2xl shadow-2xl'/>
              </a>


        <SliderBtn value='increase' ArrowIcon={<CgArrowLeftO/>} style='text-buttonsFont absolute z-10 mt-half mr-edge' count={setSliderPicNumber} counter={SliderPicNumber} buttonClicked={setButtonClicked}/>
        <SliderBtn value='add' ArrowIcon={<CgArrowRightO/>} style=' text-buttonsFont absolute z-10 mt-half ml-edge' count={setSliderPicNumber} counter={SliderPicNumber}/>


    </div>
  )
}

export default Slider