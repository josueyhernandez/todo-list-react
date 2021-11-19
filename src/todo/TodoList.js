import React, {useState, useEffect} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([])
    const [name, setName] = useState([])

    const addTodo = todo => {

        //got this piece on stackoverflow (wanted no spacing in todo)
        if (!todo.text || !/\S/.test(todo.text)) {
            return
        }

        const newTodo = [todo, ...todos]
        setTodos(newTodo)
        console.log(todo, ...todos)
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || !/\S/.test(newValue.text)) {
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const completeTodo = id => {
        let updateTodo = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updateTodo)
    }


    useEffect(() => {
        let answer = prompt("Please enter your name")
        setName(answer)
    }, [])


    let today = new Date()
    let curHr = today.getHours()
    let text 
    
    if (curHr < 12) {
        text = "Good morning"
    } else if (curHr < 18) {
        text = "Good afternoon"
    } else {
        text = "Good Evening"
    }

 


    return (
        <div>
            <h1>{text} {name}, Plan out your day!</h1>
            <TodoForm  onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList
