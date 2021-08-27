import React from 'react';

import './App.css';
import {Counter} from './components/Counter assignment/Counter'
import { Todo } from './components/Todos assignment/Todo';
function App() {
  return (
    <div className="App">
      <Counter />
      <Todo/>
    </div>
  );
}

export default App;
