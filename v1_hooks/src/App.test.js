import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const elem = document.createElement('header');
  ReactDOM.render(<App />, elem);
  ReactDOM.unmountComponentAtNode(div);
});
