// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import SearchTodo from './components/SearchTodo';
import FilterTodo from './components/FilterTodo';


function App() {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    try {
      const savedTodos = JSON.parse(localStorage.getItem('todos'))
      if(savedTodos){
        setTodos(savedTodos)
      }
    } catch (error) {
      console.error('Error parsing JSON from local storage:', error);
      setTodos([]);
    }
  },[])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const updateTodo = (id, newTitle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos
    .filter((todo) => todo.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((todo) => {
      if (filter === 'all') return true;
      if (filter === 'completed') return todo.completed;
      if (filter === 'pending') return !todo.completed;
      return true;
    });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h1  className='text-2xl font-bold text-center mb-6'>Second Wife</h1>
      <SearchTodo searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterTodo filter={filter} setFilter={setFilter} />
      <AddTodo addTodo={addTodo} />
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;
