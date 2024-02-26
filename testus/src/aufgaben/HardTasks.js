import React, { useState, useEffect, useReducer } from 'react';

/**
 * Task 1: Fetching Data with useEffect
 * Instructions:
 * - Use the `useState` hook to create a state variable `userData` initialized to `null`.
 * - Use the `useEffect` hook to fetch user data from the URL 'https://jsonplaceholder.typicode.com/users/1' when the component mounts.
 * - Once the data is fetched, update `userData` with the fetched data.
 * - Conditionally render the user's name if `userData` is not `null`, otherwise display "Loading user data...".
 * 
 * This task teaches you how to fetch and display data from an API in a React component.
 */
export const Task1 = () => {
  // Step 1: Initialize `userData` state here

  // Step 2: Fetch data within useEffect here

  return (
    <div>
      {/* Step 3: Conditionally render `userData` or loading message here */}
    </div>
  );
};

/**
 * Task 2: Managing Complex State with useReducer
 * Instructions:
 * - Define an initial state object and a reducer function for a to-do list application. The state should include an array of to-dos.
 * - Use the `useReducer` hook with your reducer function and the initial state to manage to-dos.
 * - Implement actions in your reducer function for adding, deleting, and toggling the completion status of to-dos.
 * - Render the list of to-dos and provide buttons for each action.
 * 
 * This task introduces you to `useReducer` for managing more complex state logic that involves multiple sub-values or when the next state depends on the previous one.
 */
export const Task2 = () => {
  // Define `initialState` and `reducer` function here

  // Use `useReducer` here with your `reducer` function and `initialState`

  return (
    <div>
      {/* Render your to-do list and action buttons here */}
    </div>
  );
};



/**
 * If these are too easy or too boring, try tasks like:
 * - Saving useState data in a cookie
 * - 
 * 
 * 
 */