import React, { useState, useEffect } from 'react';

// Task 1
export const Task1Parent = (props) => {

  return (
    <Task1Child {...props} />
  );
};

export const Task1Child = (props) => {

  return (
    <div>
      {Object.entries(props).map(([key, value]) => (
        <p className='answer' key={key}>{`${key}: ${value}`}</p>
      ))}
    </div>
  );
};

// Task 2
export const Task2 = () => {

  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <ul className='answer'>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

// Task 3
export const Task3 = () => {

  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='answer'>
      <input type='text' value={inputValue} onChange={handleInputChange}/>
      <p className='break'>Current input value: {inputValue}</p>
    </div>
  );
};

// Task 4
export const Task4 = () => {

  let [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className='answer span-button'>
      <p>Count: {count}</p>
      <button className='pointer' onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};