import React from 'react'

const TodoForm = ({todos,setTodos,addTodo,editTodo}) => {
    
  return (
    <div>
      <form>
      <input type='text' value={todos} onChange={(e)=>setTodos(e.target.value)}/>
      <button onClick={()=>editTodo(id)}>edit</button>
      <button onClick={addTodo}>add todo</button>
      </form>
    </div>
  )
}

export default TodoForm