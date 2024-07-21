// src/components/AddTodo.jsx
import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo({
        id: Date.now(),
        title,
        completed: false
      });
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex items-center">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-l mt-1"
          placeholder="Add new todo"
        />
        <button
          type="submit"
          className="bg-[#73BBA3] text-white p-[8.55px] rounded-r mt-1 hover:bg-[#B4E380] transition"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
