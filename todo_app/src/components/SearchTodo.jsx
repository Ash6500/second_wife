import React from 'react';

const SearchTodo = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search Todos"
      className='border border-gray-300 p-2 rounde w-full mb-4'
    />
  );
};

export default SearchTodo;
