import React, { useState, useEffect } from 'react';

const Example = () => {
  const [count, setCount] = useState(0); 
  useEffect( () => {
    document.title = `(${count}) Clicked!!`;
  } );
  return(
    <div>
      <p> You clicked {count} times </p>
      <button onClick={() => setCount(count + 1)} >
        Click +
      </button>
    </div>
  );
};

export default Example;

