import React, { useState, useEffect, useReducer } from 'react';
import deleteIcon from '../delete-icon.svg';

// Task 1
export const Task1 = () => {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        setUserData(data);

      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {userData ? (
        <p className='answer'>User's name: {userData.name}</p>
      ) : (
        <p>Loading user data...</p>
      )}
    </>
  );
};

// Task 2
export const Task2 = () => {

  const initialState = {
    todos: []
  };

  const reducer = (state, action) => {
    switch (action.type) {

      case 'ADD_TODO':
        return {
          todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }]
        };

      case 'DELETE_TODO':
        return {
          todos: state.todos.filter(todo => todo.id !== action.payload)
        };

      case 'TOGGLE_TODO':
        return {
          todos: state.todos.map(todo =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
          )
        };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (text) => {
    dispatch({ type: 'ADD_TODO', payload: text });
  };

  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  }

  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  }

  return (
    <div className='answer'>
      <h2>To-Do List</h2>
      <ul className='todo'>

        {state.todos.map(todo => (
          <li key={todo.id}>
          <div className='todo-element'>
            <p style={{ textDecoration: todo.completed ? 'line-through' : 'none', opacity: todo.completed ? 0.5 : 1 }}>
              {todo.text}
            </p>
            <div className='action-buttons'>
              <button className='pointer' style={{ gridColumn: 1 }} onClick={() => toggleTodo(todo.id)}>Toggle</button>
              <button className='pointer delete-button' style={{ gridColumn: 2 }} onClick={() => deleteTodo(todo.id)}>
                <img className='delete-icon' src={deleteIcon}/>
              </button>
            </div>
          </div>
        </li> 
        ))}
      </ul>
      <input
        type='text'
        placeholder='Add new todo'
        onKeyDown={(e) => e.key === 'Enter' && addTodo(e.target.value)}
        />
    </div>
  );
};