import React, { useState } from "react";
import String from "./String";
import ArrayMethods from "./ArrayMethods";
import First from "../Curd/First";
import Second from "../Curd/Second";



const Data = () => {
  const [x, setX] = useState(true);
  const [text,setText] = useState(true)
  const clickHandler = (event) => {
    if (x) {
      setX(false);
    } else {
      setX(true);
    }
  };

const changeHandler = (e) => {
    if (text) {
      return setText(<b>ViewList</b>)
    }
    else{
      return setText(<b>Back</b>)
    }
  }

  function data(isSubmit) {
    return isSubmit ? <First clickHandler={clickHandler}/> : <Second />;
  }

  return (
    <div>
      <center>
        {data(x)}
        {/* <input type="button" onClick={clickHandler} onChange={changeHandler}>{text}</input> */}
        <button onClick={clickHandler} onChange={changeHandler}>ViewList</button>
      </center>
    </div>
  );
};
export default Data;
