import React, { useState } from 'react';
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

    if(SliderPicNumber === 4){
      setSliderPicNumber(() => 0);
    } 
    if(SliderPicNumber === -1){
      setSliderPicNumber(() => 3);
    } 

  return (
    <div className='mt-5 flex justify-center'>
        <img src={SliderPictures[SliderPicNumber]} className='image-width rounded-2xl shadow-2xl absolute'/>

        <div className="flex justify-between">
        <SliderBtn value='increase' ArrowIcon={<CgArrowLeftO/>} style=' text-5xl z-10' count={setSliderPicNumber} counter={SliderPicNumber}/>
        <SliderBtn value='add' ArrowIcon={<CgArrowRightO/>} style=' text-5xl z-10' count={setSliderPicNumber} counter={SliderPicNumber}/>
        </div>

    </div>
  )
}

export default Slider