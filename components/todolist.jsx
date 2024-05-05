import React from 'react';
import Todo from './todo.jsx';

function Todolist({ todos, onRemovetodo }) {
  return (
    <div style={{ width: '100%', marginTop: '10px' }}>
      {todos && todos.map((todo) => (
        <Todo todo={todo} key={todo.id} onRemovetodo = {onRemovetodo} />
      ))
      }
    </div>
  );
}

export default Todolist;
