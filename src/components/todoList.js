import 'bootstrap/dist/css/bootstrap.css'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import * as DropdowonMenu from '@radix-ui/react-dropdown-menu'



function TodoList ({todos, setTodos, setEditTodo}) {


    // const [todo, setTodo] = useState([])


    // useEffect(() => {
    //     /**
    //      * On page load we need to check if todoData exist in the local storage and if it exist we get the value and set it to the todo value
    //      */
    //     const objectData =  localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : [];
    //     setTodo( objectData)
    //     console.log(objectData);
    // }, []);

    const  deleteTask = (todo) => {
        const deleteTodo = todos.filter((todoItem) => {todos.indexOf(todoItem) != todos.indexOf(todo)})

        console.log(deleteTodo);
        setTodos(...deleteTodo);
        localStorage.setItem("todoData", JSON.stringify(deleteTodo))

    }

    const editTask = (todo) => {

        const updateList =todos.filter((todoItem) => {todos.indexOf(todoItem) != todos.indexOf(todo)})

        const edit = todos.find((todoItem) => {todos.indexOf(todoItem) == todos.indexOf(todo)})
        
        console.log(edit);
        setEditTodo([edit]);
    }

    const doneTask = (todo) => {
        setTodos(
            todos.map((item) => {
                if(todos.indexOf(item) == todos.indexOf(todo)) {
                    return { ...item,}
                }
                return item;
            })
        )
    }



    return (
        <>
            <div className='container-fluid p-3 mt-5'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-sm-9 col-md-8 col-lg-8'>
                        <div className='card' id={styles.list}>
                            <div>
                                <ul key="done" className={styles.todo_list}>
                                    {
                                        todos.length >=1 ? todos.map((todo, idx) =>{
                                            return (
                                                <div key={idx} className={styles.listDisplay}>
                                                    <li  >
                                                        <b key="task">Task:</b> {todo.title} <br/> 
                                                        <b key="date">Date:</b> {todo.date} <b key="startTime">StartTime:</b> {todo.startTime} <b key="endTime">EndTime:</b> {todo.endTime} 
                                                    </li>
                                                    <div>
                                                        <DropdowonMenu.Root>
                                                            <DropdowonMenu.Trigger className={styles.dropbtn}><BsThreeDotsVertical className={styles.icon} /></DropdowonMenu.Trigger>

                                                            <DropdowonMenu.Content className={styles.dropdown_content}>
                                                                <DropdowonMenu.Item className={styles.Item} onClick={() =>{doneTask(todo)}}> Done</DropdowonMenu.Item>
                                                                <DropdowonMenu.Item className={styles.Item} onClick={() =>{editTask(todo)}}>Edit</DropdowonMenu.Item>
                                                                <DropdowonMenu.Item className={styles.Item} onClick={(e) =>{
                                                                    e.preventDefault()
                                                                    deleteTask(todo)}}> Delete</DropdowonMenu.Item>
                                                            </DropdowonMenu.Content>  
                                                        </DropdowonMenu.Root>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        : 'Enter Task'
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default TodoList;