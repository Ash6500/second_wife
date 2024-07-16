import React from 'react';

const SearchTodo = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search todos"
    />
  );
};

export default SearchTodo;
