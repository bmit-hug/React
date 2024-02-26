import React, { useState, useEffect } from 'react';


/**
 * Task 1: Using the Spread Operator with Props
 * Instructions:
 * - Create a component named `Task5Parent` that accepts props.
 * - Use the spread operator to pass all props received by `Task5Parent` to the `Task5Child` component.
 * - In the `Task5Child` component, display the passed props inside a paragraph (<p>).
 */
export const Task1Parent = (props) => {
  // Step 1: Pass props using the spread operator
  // Hint: <Task5Child {...props} />
  return (
    // Your code here, replace the line below with your code
    <></>
  );
};

export const Task1Child = (props) => {
  // Step 2: Display the props
  // Hint: You can use Object.entries(props) to iterate over props and display them
  return (
    // Your code here, replace the line below with your code
    <></>
  );
};



/**
 * Task 2: Rendering Lists with Keys
 * Instructions:
 * - Create a list of items (e.g., an array of strings or objects).
 * - Use the `map` function to render each item as a list item (`<li>`) inside a `<ul>` element.
 * - Assign a unique `key` prop to each list item to help React identify which items have changed, are added, or are removed.
 * 
 * This task helps you understand the importance of keys in list rendering for performance optimization.
 */

/**
 * something like below:
 * 
 * <ul>
 *    {items.map((item, index) => (
 *        <li key={ }>{item}</li>
 *    ))}
 * </ul>
 */

export const Task2 = () => {
  const items = [/* Define your items array here */];

  return (
    <></>
  );
};



/**
 * Task 3: Form Input
 * Instructions:
 * - Use the `useState` hook to create a state variable to store the input value.
 * - Render an input field of type text with the state variable as its value.
 * - Update the state variable with the new input value whenever the text in the input field changes.
 * - Display the current input value in a paragraph below the input field.
 * 
 * This task introduces you to handling form inputs and synchronizing input values with state.
 */
export const Task3 = () => {
  // Initialize input value state here

  // Handle input change here

  // Render the input field and display its current value here
  return (
    <>
      {/* Input field */}
      {/* Display input value */}
    </>
  );
};



/**
 * Task 4: Understanding useEffect
 * Instructions:
 * - Initialize a state variable `count` with 0.
 * - Use the `useEffect` hook to update the document title with the current count every time `count` changes.
 * - Render a button that increments `count` when clicked.
 * 
 * This task demonstrates how to run side effects in response to state changes using `useEffect`.
 */
export const Task4 = () => {
  // Step 1: Initialize `count` state here

  // Step 2: Use `useEffect` to change the document title on `count` changes

  return (
    <div>
      {/* Step 3: Render a button to increment `count` */}
    </div>
  );
};