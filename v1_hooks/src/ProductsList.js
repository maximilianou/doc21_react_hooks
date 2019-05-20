import React, { useState } from 'react';

const initialState = 
    [{ id: 101, name:"Banana", price: 40},
               { id: 102, name:"Watermelon", price: 60},
               { id: 103, name:"Pineapple", price: 80}];

const ProductLi = ( { prod } ) => {
  return(
      <li className='product' ><span>{prod.name}</span><strong>{prod.price}</strong></li>
  );
};

const ProductsList = () => {
  const [products, setProducts] = useState( initialState );
  return(
    <ul>
      { products.map(  prod  =>
                                <ProductLi key={prod.id} prod={prod} />) }
    </ul>
  );
};

export default ProductsList;


