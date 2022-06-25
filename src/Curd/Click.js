import React, { useState } from 'react'
import First from './First'
import Second from './Second'

const Click = () => {
    const [list,setList] = useState(true)    
  
  const submitHandler = (e) => {

    if (list) {
      setList(true)
    } else {
      setList(false)
    }
  }


  function data(isSubmit) {
    return isSubmit ? <First /> : <Second />;
  }
  console.log(data(true))
  return (
    <div>
      {data(list)}
      <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Click
