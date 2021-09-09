import React, {Fragment, useState, useEffect} from 'react'
import EditTodo from './EditTodo'


const ListTodo = () => {
    
    const [todos, setTodos] = useState([])

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`,
            {method: 'DELETE'})

            setTodos(todos.filter(todo => todo.todo_id !== id))
        } catch (error) {
            console.error(error.message)
        }
    }
    
    const getTodos = async() => {
        try {
            const response = await fetch('http://localhost:5000/todos')

            const jsonData = await response.json()

            // console.log(jsonData)
            setTodos(jsonData)
        } catch (error) {
            console.error(error.message)
        }
    } 

    useEffect(() => {
        getTodos()
    }, [])

    console.log(todos)
    return (
        <Fragment>
            List TODOS
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>description</td>
                        <td>edit</td>
                        <td>delete</td>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>hola</td>
                        <td>chao</td>
                    </tr> */}

                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td>{todo.todo_id}</td>
                            <td>{todo.description}</td>
                            <td><EditTodo todo={todo}/></td>
                            <td><button onClick = {() => deleteTodo(todo.todo_id)}>delete</button></td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListTodo
