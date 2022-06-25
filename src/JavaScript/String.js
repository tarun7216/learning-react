import React, { useState } from 'react'
import ArrayMethods from './ArrayMethods'

const String = () => {
  const[text,setText] = useState("Hi Jai How are You")


    function myFunction () { 
      let data = text
      setText(data.replace("Jai", "Sindhu"))


     console.log(text);

    }
  return (
    <div>
        <p>
            {text}
            <button onClick={myFunction}>ClikMe</button>
        </p>
      
    </div>
  )
}

export default String
