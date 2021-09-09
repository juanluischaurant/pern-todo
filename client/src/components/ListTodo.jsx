import React, {Fragment, useState, useEffect} from 'react'
import EditTodo from './EditTodo'
import Modal from "./Modal";


const ListTodo = () => {
    const [editingId, setEditingId] = useState('')
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
            // const response = await fetch('http://localhost:5000/todos')

            // const jsonData = await response.json()
            console.log('getTodos')

            // console.log(jsonData)
            setTodos([{ id: 4, description: 'todo one'}, { id: 5, description: 'todo two'}, { id: 3, description: 'todo one'}, { id: 2, description: 'todo two'} ])
        } catch (error) {
            console.error(error.message)
        }
    }

    const updateTodo = (props) => {
        // TODO: needs to be attached to the database
        console.log(props)
    }

    useEffect(() => {
        getTodos()
    }, [])

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
                            <td><button onClick={() => setEditingId(todo.id)}>Edit</button></td>
                            <td><button onClick = {() => deleteTodo(todo.todo_id)}>delete</button></td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
            {
                editingId &&
                    <Modal
                        id={todos.filter(t => t.id === editingId)[0].id}
                        defaultInput={todos.filter(t => t.id === editingId)[0].description}
                        onUpdate={updateTodo}
                        onClose={() => setEditingId('')}
                    />
            }
        </Fragment>
    )
}

export default ListTodo
