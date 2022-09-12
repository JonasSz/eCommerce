import React from 'react';


function SliderBtn({ArrowIcon, style, count, counter, buttonClicked, value}) {

  function checkAdd (){
      value == 'add' ?  count(counter + 1) : count(counter - 1);
  }
  function add () {

  }
  return (
    <button value={value} className={style} onClick={() => {checkAdd(); buttonClicked(true)}}>{ArrowIcon}</button>
  )
}

export default SliderBtn