import React, { useState } from 'react';

// Task 1
export const Task1 = () => {

  const greeting = 'Hello, React!'
  return (
    <div className='answer'>{greeting}</div>
  );
};

// Task 2
export const Task2 = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => {
    setIsLoggedIn(prevState => !prevState);
  }

  return (
    <div className='answer span-button'>
      <p>{isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
      <button className='pointer' onClick={toggleLogin} >Log In/Out</button>
    </div>
  );
};

// Task 3
export const Task3 = (props) => {

  return (
    <p className='answer'>{props.message}</p>
  );
};

// Task 4
export const Task4 = () => {

  const handleClick = () => {
    alert('Arrow Function Clicked!');
  }

  return (
    <button className='pointer' onClick={handleClick}>Click Me</button>
  );
};

// Task 5
export const Task5 = () => {

  const handleButtonClick = () => {
    alert('Button CLicked!')
  }

  return (
    <button className='pointer' onClick={handleButtonClick}>Click Me</button>
  );
};

// Task 6
export const Task6 = () => {

  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className='answer span-button'>
      <p>Count: {count}</p>
      <button className='pointer' onClick={incrementCount}>Increment</button>
    </div>
  );
};

// Task 7
export const Task7 = () => {

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <>
      <button className='pointer' onClick={toggleVisibility}>Toggle Visibility</button>
      {isVisible && <div className='answer'>Now you see me!</div>}
    </>
  );
};