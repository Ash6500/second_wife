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
        <form action="" onSubmit={onSubmit}>
            <input 
            type = "text"
            value = {title}
            onChange = {(e) => setTitle(e.target.value)}
            placeholder = "Add a new todo"
             />

            <button type="submit">Add Todo</button>
        </form>
    )
}

export  default AddTodo;