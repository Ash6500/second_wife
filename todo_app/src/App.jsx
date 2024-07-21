import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import SearchTodo from './components/SearchTodo';
import FilterTodo from './components/FilterTodo';
import todo_icon from './assets/todo_icon.png'
import Register from './components/Register';
import Login from './components/Login';
import './App.css';

  const TodoApp = () => {

  const {logout} = useContext(AuthContext)
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
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-[#F6FB7A] bg-opacity-60 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-md">
        <img src={todo_icon} alt="" className='w-8'/>
        <button
            onClick={logout}
            className="bg-red-500 text-white p-2 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        <h1 className="text-3xl font-bold text-center mb-3">
          Second Wife <span className="text-yellow-500">✨</span>
        </h1>
        <p className='text-center mb-6'>She&apos;ll Always Remember What You Forgot!</p>
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

function App() {

  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        {!user ? (
          <>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Navigate to='/login' />} />
          </>
        ) : (
          <Route path='/' element={<TodoApp />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
