import React from 'react'

const TodoList = ({allTodos,deleteTodo}) => {
  return (
    <div>
     {
        allTodos.map((ele)=>{
            let {id,text} = ele
            return (
                <section key={id}>
                <h3>{text}</h3>
                <button >edit</button>
                <button onClick={()=>deleteTodo(id)}>delete</button>
                </section>
            )
        })
     }
    </div>
  )
}
export default TodoList