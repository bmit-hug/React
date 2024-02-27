import React from 'react';
import './App.css';

import * as BasicTasks from './aufgaben/BasicTasks';
import * as MediumTasks from './aufgaben/MediumTasks';
import * as HardTasks from './aufgaben/HardTasks';

function App() {
  return (
    <div className='app'>
      <h1 id='first'>React Tasks</h1>

      <div className='task-box'>
        <h2>Basic Tasks</h2>

        <div className='all-tasks'>
          
          <div className='task'>
            <h3>Task 1: Hello world</h3>
            <BasicTasks.Task1/>
          </div>
          
          <div className='task'>
            <h3>Task 2: Ternary</h3>
            <BasicTasks.Task2/>
          </div>

          <div className='task'>
            <h3>Task 3: Props</h3>
            <BasicTasks.Task3 message='This is the prop message!'/>
          </div>

          <div className='task'>
            <h3>Task 4: Arrow functions</h3>
            <BasicTasks.Task4/>
          </div>

          <div className='task'>
            <h3>Task 5: Function Button</h3>
            <BasicTasks.Task5/>
          </div>

          <div className='task'>
            <h3>Task 6: useState</h3>
            <BasicTasks.Task6/>
        </div>

          <div className='task'>
            <h3>Task 7: Conditional rendering</h3>
            <BasicTasks.Task7/>
          </div>
        </div>
      </div>
      
      <div className='task-box'>
        <h2>Medium Tasks</h2>

        <div className='all-tasks'>

          <div className='task'>
            <h3>Task 1: Spread operators</h3>
            <MediumTasks.Task1Parent/>
            <MediumTasks.Task1Child/>
          </div>
          
          <div className='task'>
            <h3>Task 2: List rendering with keys</h3>
            <MediumTasks.Task2/>
          </div>
          
          <div className='task'>
            <h3>Task 3: Form Input</h3>
            <MediumTasks.Task3/>
          </div>
          
          <div className='task'>
            <h3>Task 4: useEffect</h3>
            <MediumTasks.Task4/>
          </div>
        </div>
      </div>
      
      <div className='task-box' id='last'>
        <h2>Hard Tasks</h2>

        <div className='all-tasks'>
          
          <div className='task'>
            <h3>Task 1: Data fetching!</h3>
            <HardTasks.Task1/>
            {/* Implementation for other tasks is left as a task in itself */}
          </div>

          <div className='task'>
            <h3>Task 2: Complex state</h3>
            <HardTasks.Task2/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;