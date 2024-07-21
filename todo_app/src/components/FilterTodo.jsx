import React from 'react'

const FilterTodo = ({filter, setFilter}) => {
  return (
    <div>
        <button
        onClick={() => setFilter('all')}
        className={`p-2 rounded m-2 ${
          filter === 'all' ? 'bg-orange-500 text-white' : 'bg-gray-200'
        } transition`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={`p-2 m-2 rounded ${
          filter === 'completed' ? 'bg-orange-500 text-white' : 'bg-gray-200'
        } transition`}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter('pending')}
        className={`p-2 m-2 rounded ${
          filter === 'pending' ? 'bg-orange-500 text-white' : 'bg-gray-200'
        } transition`}
      >
        Pending
      </button>
    </div>
  )
}

export default FilterTodo