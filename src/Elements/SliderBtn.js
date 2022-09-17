import React from 'react';


function SliderBtn({ArrowIcon, style, count, counter, buttonClicked, value}) {

  function checkAdd (){
      value == 'add' ?  count(counter + 1) : count(counter - 1);
  }
  return (
    <button value={value} className={style} onClick={() => checkAdd()}>{ArrowIcon}</button>
  )
}

export default SliderBtn