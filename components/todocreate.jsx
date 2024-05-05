import React, { useState } from 'react'
import './App.css'

function todocreate({onCreatetodo}) {

  const [newtodo, settodo] = useState('')
  const clearInput = () =>{
    settodo('');
  }
  const createtodo = () =>{
    if(!newtodo) return;
      const request = {
        id: Math.floor(Math.random() *999999),
        content: newtodo
      }
      onCreatetodo(request);
      clearInput();
    
  }
  return (
   
    <div className='todocreate'>
        <input className='todoinput' type="text" placeholder='Write a To-do'
        value={newtodo}
        onChange={(e) => settodo(e.target.value)
        } 
        
        
        />
        <button onClick= {createtodo} className='todobutton'>Create</button>
    </div>
  )
}

export default todocreate