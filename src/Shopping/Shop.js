import React, { useEffect, useState } from "react";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [options,setOptions] = useState([])


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));

      fetch("https://fakestoreapi.com/products/categories")
      .then((response)=>response.json())
      .then((json)=>setOptions(json))
  }, []);

 
  return (
    <div>
      <header>
        <nav className="Nav">
          <h2> Shopping Online</h2>
        </nav>
      </header>
      <center>
      <div>
          {options.map((option)=> {
            return(
              <button className="btn1">{option}</button>
            )
          })}
        </div>
    
      </center>
      <div>
        {(products).map((items, index) => {
          return (
            <div>
              <button className="btn2">
              <img src={items.image} alt="#" width={100} />
              <p>{items.description}</p>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
