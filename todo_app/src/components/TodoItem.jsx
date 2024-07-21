import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({todo, toggleComplete, updateTodo, deleteTodo}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(todo.title)

    const handleToggle = () => toggleComplete(todo.id);
  const handleDelete = () => deleteTodo(todo.id);
  const handleEdit = () => setIsEditing(true);
  const handleSave = () => {
    updateTodo({
      ...todo,
      title: newTitle
    });
    setIsEditing(false);
  };
    
  return (
    <li
      className={`flex items-center justify-between p-2 border-b border-gray-300 ${
        todo.completed ? 'line-through text-gray-500' : ''
      }`}
    >
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      ) : (
        <span onClick={handleToggle} className="cursor-pointer flex-grow">
          {todo.title} {todo.completed ? '✅' : '🔲'}
        </span>
      )}
      {isEditing ? (
        <button
          onClick={handleSave}
          className="text-green-500 hover:text-green-700 transition ml-2"
        >
          Save 💾
        </button>
      ) : (
        <button
          onClick={handleEdit}
          className="text-yellow-500 hover:text-yellow-700 transition ml-2"
        >
          Edit ✏️
        </button>
      )}
      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-700 transition ml-2"
      >
        Delete 🗑️
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem