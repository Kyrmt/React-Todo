import { useState } from 'react'
import Todocreate from '../components/todocreate'
import '../components/App.css'
import Todolist from '../components/todolist'

function App() {
  const [todos,Settodos] = useState([])

  const createtodo = (newtodo) => {
    Settodos([...todos, newtodo]);
  }
  console.log(todos)

  const removetodo = (todoId) => {
    Settodos([...todos.filter((todo) => todo.id !== todoId)])
  }

  return (
    <>
    <div>
      <div style={{ width:'500px',display:'flex',flexDirection:'column',justifyContent:'center' }}>
      <Todocreate onCreatetodo = {createtodo} />
      <Todolist todos = {todos} onRemovetodo = {removetodo}/>
      </div>
  
    </div>
     
    </>
  )
}

export default App
