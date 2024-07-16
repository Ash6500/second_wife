import React from 'react'

const FilterTodo = ({filter, setFilter}) => {
  return (
    <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
    </div>
  )
}

export default FilterTodo