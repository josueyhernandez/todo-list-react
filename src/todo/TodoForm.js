import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : "")

    const ref = useRef(null)

    useEffect(() => {
        ref.current.focus()
    })
    
    const handleText = event => {
        setInput(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        props.onSubmit({
            id: Math.floor(Math.random() * 1000000000), //generate random id, odd of having the same id will be slim
            text: input
        })
        setInput("") //after submit, text field will be empty
    }




    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? ( 
                <>
            <input 
             type="text"
             placeholder="Update Todo"
             value={input}
             name="text"
             className="todo-input edit"
             onChange={handleText}
             ref={ref}
             />
             <button className="todo-button edit">Update</button>
             </> 
             ) :
            ( 
                <>
                 <input 
                type="text"
                placeholder="Add todo"
                value={input}
                name="text"
                className="todo-input"
                onChange={handleText}
                ref={ref}
                />
                <button className="todo-button">Add Todo</button>
                </> 
                )}
            </form>
        </div>
    )
}

export default TodoForm
