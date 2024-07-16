import React, { useState } from 'react'

const TodoItem = ({todo, toggleComplete, updateTodo, deleteTodo}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(todo.title)

    const handleUpdate = () =>{
        updateTodo(todo.id, newTitle);
        setIsEditing(false);
    }
  return (
    <li className='flex  items-center justify-between mb-2'>
        <div className="flex items-center">
        <input 
        type="checkbox"
        checked = {todo.completed}
        onChange={ () => toggleComplete(todo.id)}
        className='mr-2'
         />

         {isEditing ? (
            <input type="text" value = {newTitle} onChange={(e) => setNewTitle(e.target.value)} className='border border-gray-300 p-1 rounded' />
         ) : (
            <span>{todo.title}</span>
         )}
        </div>

        <div className='flex items-center'>
        <button onClick={() => setIsEditing(true)} className='bg-amber-400  text-white p-1 rounded mr-2'>Edit</button>
         {isEditing && <button  onClick={handleUpdate} className='bg-emerald-600  text-white p-1 rounded mr-2'>Save</button>}
         <button onClick={() => deleteTodo(todo.id)} className='bg-red-600 text-white p-1 rounded'>Delete</button>
        </div>
    </li>
  )
}

export default TodoItem