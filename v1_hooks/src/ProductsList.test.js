import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import ProductsList from './ProductsList';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('Can render and update a Counter',() => {
  // Test first render and effect
  act(() => {
    ReactDOM.render( <ProductsList /> , container);
  });
  const liProducts = container.querySelectorAll('li.product');
  expect( liProducts.length ).toBe( 3 );
});
