import React, { useState } from 'react'

const TodoItem = ({todo, toggleComplete, updateTodo, deleteTodo}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(todo.title)

    const handleUpdate = () =>{
        updateTodo(todo.id, newTitle);
        setIsEditing(false);
    }
  return (
    <li>
        <input 
        type="checkbox"
        checked = {todo.completed}
        onChange={ () => toggleComplete(todo.id)}
         />

         {isEditing ? (
            <input type="text" value = {newTitle} onChange={(e) => setNewTitle(e.target.value)} />
         ) : (
            <span>{todo.title}</span>
         )}

         <button onClick={() => setIsEditing(true)}>Edit</button>
         {isEditing && <button  onClick={handleUpdate}>Save</button>}
         <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  )
}

export default TodoItem