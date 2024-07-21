import React from 'react';

const SearchTodo = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mt-1"
        placeholder="Search todos 🔍"
      />
    </div>
  );
};

export default SearchTodo;

