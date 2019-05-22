import React, { useState, useEffect } from 'react';

const initialState = 
    [{ id: 101, name:"Banana", price: 40},
               { id: 102, name:"Watermelon", price: 60},
               { id: 103, name:"Pineapple", price: 80}];

const ProductLi = ( { prod } ) => {
  return(
      <li className='product' ><span>{prod.name}</span><strong>{prod.price}</strong></li>
  );
};

const useConsole = (times) => {
  useEffect( () => {
    console.log("Effect Call: "+ times);
  });
}

let renderTimes = 1000;
const ProductsList = () => {
  const [products, setProducts] = useState( initialState );
  console.log("Render Times: "+ renderTimes++);
  useConsole(renderTimes); 

  const handlePlus = () => {
    setProducts(  [ ...products, { id: renderTimes, name: "Lemon", price: 20} ]); 
  };
  return(
    <ul onClick={handlePlus}>
      { products.map(  prod  =>
                                <ProductLi key={prod.id} prod={prod} />) }
    </ul>
  );
};

export default ProductsList;


