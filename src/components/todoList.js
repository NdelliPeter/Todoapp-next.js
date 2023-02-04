import 'bootstrap/dist/css/bootstrap.css'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import * as DropdowonMenu from '@radix-ui/react-dropdown-menu'



function TodoList ({todos, setTodos, deleteTask, editTask, }) {

    
    // const [todo, setTodo] = useState([])


    // useEffect(() => {
    //     /**
    //      * On page load we need to check if todoData exist in the local storage and if it exist we get the value and set it to the todo value
    //      */
    //     const objectData =  localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : [];
    //     setTodos( objectData)
    //     console.log(objectData);
    // }, []);

    
    // const  deleteTask = (todo) => {
        
    //     const deleteTodo = todos.filter((todoitem) => (todos.indexOf(todoitem) !== todos.indexOf(todo)))

    //     console.log('HHHHHHHH', deleteTodo);

    //     setTodos(deleteTodo);
    
    //     localStorage.setItem("todoData", JSON.stringify(deleteTodo))
    // }

    const doneTask = (todo) => {
        const done = todos.map((todoitem) => {
          if(todos.indexOf(todoitem) == todos.indexOf(todo)) {
            return (true, todo);
          }
          return (false, todoitem);
        })
        setTodos(done)
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
                                        
                                        ((todos?.length ?? 0) >= 1) ? todos.map((todo, id) =>{                                            
                                            return (
                                                <div key={id} className={
                                                    (doneTask.true) ? styles.listDisplay + ' ' + styles.line_through
                                                    : styles.listDisplay }>
                                                    <li>
                                                        <span> <b key="task">Task:</b> {todo?.title} <br/> </span>
                                                        <span> <b key="date">Date:</b> {todo?.date} </span>
                                                        <span> <b key="startTime">StartTime:</b> {todo?.startTime} </span>
                                                        <span> <b key="endTime">EndTime:</b> {todo?.endTime} </span>
                                                    </li>
                                                    <div>
                                                        <DropdowonMenu.Root>
                                                            <DropdowonMenu.Trigger className={styles.dropbtn}><BsThreeDotsVertical className={styles.icon} /></DropdowonMenu.Trigger>

                                                            <DropdowonMenu.Content className={styles.dropdown_content}>
                                                                <DropdowonMenu.Item className={styles.Item} onClick={(e) =>{
                                                                    e.preventDefault();
                                                                    doneTask(todo)}}> Done</DropdowonMenu.Item>
                                                                <DropdowonMenu.Item className={styles.Item} onClick={(e) =>{
                                                                    e.preventDefault();
                                                                    editTask(todo)}}>Edit</DropdowonMenu.Item>
                                                                <DropdowonMenu.Item className={styles.Item} onClick={(e) =>{
                                                                    e.preventDefault();
                                                                    deleteTask(todo)}}> Delete</DropdowonMenu.Item>
                                                            </DropdowonMenu.Content>  
                                                        </DropdowonMenu.Root>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        : <div>
                                            <h5>Wating For You To Enter Task</h5>
                                        </div>
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