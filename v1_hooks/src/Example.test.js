import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Example from './Example';

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
    ReactDOM.render( <Example /> , container);
  });
  const button = container.querySelector('button');
  const label = container.querySelector('p');
  expect( label.textContent ).toBe( ' You clicked 0 times ' );
  expect( document.title ).toBe( '(0) Clicked!!' );
  // Test second render and effect 
  act( () => {
    button.dispatchEvent( new MouseEvent('click', { bubbles: true}));
  });
  expect(label.textContent).toBe(' You clicked 1 times ');
  expect(document.title).toBe('(1) Clicked!!');
});
