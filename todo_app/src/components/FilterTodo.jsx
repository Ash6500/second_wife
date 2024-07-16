import React from 'react'

const FilterTodo = ({filter, setFilter}) => {
  return (
    <div>
        <button onClick={() => setFilter('all')} className={`p-2 rounded mr-2 mb-2 ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>All</button>
        <button onClick={() => setFilter('completed')} className={`p-2 mr-2 mb-2 rounded ${filter ==='completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Completed</button>
        <button onClick={() => setFilter('pending')} className={`p-2 rounded mr-2 mb-2 ${filter === 'pending'? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Pending</button>
    </div>
  )
}

export default FilterTodo