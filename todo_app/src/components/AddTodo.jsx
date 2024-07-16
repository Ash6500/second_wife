import React, {useState} from "react";

const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!title) return;
        addTodo({
            title,
            completed: false,
            id: Date.now()
        })
        setTitle('');
    }

    return(
        <form action="" onSubmit={onSubmit} className="flex mb-4">
            <input 
            type = "text"
            value = {title}
            onChange = {(e) => setTitle(e.target.value)}
            placeholder = "Add a new todo"
            className="border border-gray-300 p-2 rounded-l-lg flex-grow"
             />

            <button type="submit" className="bg-purple-600 text-white p-2 rounded-r-lg">Add Todo</button>
        </form>
    )
}

export  default AddTodo;