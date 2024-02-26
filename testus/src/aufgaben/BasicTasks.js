// BasicTasks.js
import React, { useState } from 'react';

/**
 * Task 1: Introduction to JSX
 * JSX is just a combination of HTML and JavaScript functionality. Meaning you can write HTML code but also run JS.
 * You can also use variables in the middle of HTML by enclosing them with {}
 * Example: <p>I am {age} years old</p>
 * Instructions:
 * - write JSX that displays a div with the text 'Hello, React!'.
 */
export const Task1 = () => {
  const greeting = 'Hello, React!'
  return (
    // Your code here, replace the line below with your code
    <div className='answer'>{greeting}</div>
  );
};



/**
 * Task 2: Using Ternary Operators for Conditional Rendering
 * Instructions:
 * - Use the `useState` hook to create a boolean state variable `isLoggedIn`.
 * - Render a button that toggles the `isLoggedIn` state.
 * - Use a ternary operator to conditionally render text saying 'Logged In' if `isLoggedIn` is true, or 'Logged Out' if false.
 * 
 * This task focuses on using ternary operators for succinct conditional rendering.
 */
export const Task2 = () => {
  // Initialize `isLoggedIn` state and toggle function here

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(prevState => !prevState);
  }

  return (
    <>
      <button className='pointer' onClick={toggleLogin} /* Toggle isLoggedIn state here */>Log In/Out</button>
      <div className='answer'>{isLoggedIn ? 'Logged In' : 'Logged Out'}</div>
    </>
  );
};



/**
 * Task 3: Using Props
 * Props are basicaly parameters which can be given while calling a function or component (the individual 'Tasks' you see)
 * As you can see here, all variables you give to task 2 will be stored in the variable 'props'. 
 * So if for example you give the task the parameter 'name' then you can use it by writing props.name. 
 * You first point to the props, and the to the name variable in it
 * Instructions:
 * - Accept a prop named `message` and display it inside a paragraph (<p>) element.
 */
export const Task3 = (props) => {
  return (
    // Your code here, replace the line below with your code
    <p className='answer'>{props.message}</p>
  );
};



/**
 * Task 4: Arrow Functions in Event Handlers
 * Instructions:
 * - Define an arrow function named `handleClick` that shows an alert saying 'Arrow Function Clicked!'.
 * - Attach this arrow function to a button's `onClick` event handler.
 * - Render the button with the text 'Click Me'.
 * 
 * This task introduces you to using arrow functions for event handlers in React components.
 */
export const Task4 = () => {
  // Define handleClick as an arrow function here

  const handleClick = () => {
    alert('Arrow Function Clicked!');
  }

  return (
    <button className='pointer' onClick={handleClick} /* Attach the handleClick event here */>Click Me</button>
  );
};



/**
 * Task 5: Creating a Button That Triggers a Function
 * Instructions:
 * - Create a component named `Task3`.
 * - Inside this component, define a function named `handleButtonClick` that displays an alert with a message 'Button clicked!' when the button is clicked.
 * - Render a button in the component. Add an `onClick` event listener to this button that calls the `handleButtonClick` function when the button is clicked.
 * - The text on the button should say 'Click Me'.
 * 
 * This task tests your ability to handle events in React and execute functions based on user interactions.
 */
export const Task5 = () => {
  // Step 1: Define the button click handler
  // Create a function `handleButtonClick` that calls `alert` with the message 'Button clicked!'

  const handleButtonClick = () => {
    alert('Button CLicked!')
  }

  // Step 2: Render the button with an onClick event listener
  // The `onClick` prop should be assigned the `handleButtonClick` function
  // Ensure the button text is 'Click Me'
  return (
    <div>
      {/* Render a button here. It should call `handleButtonClick` when clicked. */}
    <button className='pointer' onClick={handleButtonClick}>Click Me</button>
    </div>
  );
};



/**
 * Task 6: Introduction to useState Hook
 * Instructions:
 * - Use the useState hook to manage a piece of state named `count`.
 * - Initialize `count` with 0 and display it inside a div.
 * - Add a button that increments `count` when clicked.
 */
export const Task6 = () => {
  // Step 1: Initialize state using `useState`
  // Use `useState` here to declare a `count` state variable initialized to 0
  // `useState` returns an array with 2 elements: the current state value and a function to update it.
  // Example: const [count, setCount] = useState(0);

  const [count, setCount] = useState(0);

  // Step 2: Implement the increment function
  // Create a function `incrementCount` that updates `count` by incrementing its value.
  // This function should call `setCount` with the new value of `count`.

  const incrementCount = () => {
    setCount(count + 1);
  };

  // Step 3: Render the component
  // Return a div containing:
  // - A paragraph (<p>) element to display the current `count`
  // - A button element that, when clicked, calls `incrementCount` to increment `count`
  return (
    <>
      {/* Display the count state inside a paragraph here */}
      <p className='answer'>Count: {count}</p>

      {/* Add a button here that calls `incrementCount` when clicked */}
      <button className='pointer' onClick={incrementCount}>Increment</button>
    </>
  );
};



export const Task7 = () => {
  /**
 * Task 7: Conditional Rendering
 * Instructions:
 * - Use the useState hook to create a boolean state `isVisible`.
 * - Toggle `isVisible` when the button is clicked.
 * - Conditionally render the text 'Now you see me!' inside a div only if `isVisible` is true.
 */
  // Step 1: Initialize boolean state using `useState`
  // Use `useState` here to declare an `isVisible` state variable initialized to false.
  // `isVisible` will control the visibility of the message.

  const [isVisible, setIsVisible] = useState(false);

  // Step 2: Implement the toggle visibility function
  // Create a function `toggleVisibility` that toggles the value of `isVisible`.
  // This function should call `setIsVisible` with the opposite value of `isVisible`.

  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  // Step 3: Conditional Rendering
  // Use a conditional statement inside your JSX to render the 'Now you see me!' message only if `isVisible` is true.
  // Hint: You can use the logical && operator to achieve this.
  return (
    <>
      {/* Add a button here that, when clicked, calls `toggleVisibility` */}
      <button className='pointer' onClick={toggleVisibility}>Toggle Visibility</button>

      {/* Conditionally render a div with 'Now you see me!' text here, based on `isVisible` */}
      {isVisible && <div className='answer'>Now you see me!</div>}
    </>
  );
};
