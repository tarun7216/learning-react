import React from 'react'

const Loop = () => {
    let text = ""
    for (var i=0; i<=10; i++) {
        text += i ;
    }
  return (
    <div>
      <h2>
       JavaScript For Loop.
      </h2>
      {text}.
    </div>
  )
}

export default Loop
