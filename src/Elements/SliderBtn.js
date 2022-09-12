import React from 'react';


function SliderBtn({ArrowIcon, style, count, counter, sign, value}) {
  return (
    <button value={value} className={style} onClick={ () => 
      value == 'add' ?  count(counter + 1) : count(counter - 1)
    }>{ArrowIcon}</button>
  )
}

export default SliderBtn