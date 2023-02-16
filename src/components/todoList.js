import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import { BsThreeDotsVertical, BsFillCheckCircleFill } from "react-icons/bs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'



function TodoList ({todos, setTodos, deleteTask, editTask, }) {


    // const [bookmarksChecked, setBookmarksChecked] = useState(false);
    const [doneTodo, setDoneTodo] =useState(false)

    // useEffect(() => {
    //     /**
    //      * On page load we need to check if todoData exist in the local storage and if it exist we get the value and set it to the todo value
    //      */
    //     const objectData =  localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : [];
    //     setTodos( objectData)
    //     console.log(objectData);
    // }, []);



    const doneTask = (todo) => {
        // const done = todos.find((todoitem) => (todos.indexOf(todoitem) == todos.indexOf(todo)))
        // done.complete

        // console.log(done);
        // const done = todos.map((todoitem) => {
        //     todos.indexOf(todoitem) == todos.indexOf(todo)
        //        return todoitem, setDoneTodo(true)
        // })
        const done= todos.map((todoitem) => {
            if(todos.indexOf(todoitem) == todos.indexOf(todo)){
                return {...todoitem, complete: !todoitem.complete} 
                      
            }else{
                return todoitem
            }
               
        }) 
        console.log(done);
        setTodos(done)
        // localStorage.setItem("todoData", JSON.stringify(done))
    }

    const complete = doneTodo ? styles.line_through: '';



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
                                                <div key={id} className={`${styles.listDisplay} ${todo.complete ? styles.line_through :''}`}>
                                                    <li>
                                                        <span> <b >Task:</b> {todo?.title} <br/> </span>
                                                        <span> <b >Date:</b> {todo?.date} </span>
                                                        <span> <b >StartTime:</b> {todo?.startTime} </span>
                                                        <span> <b >EndTime:</b> {todo?.endTime} </span>
                                                    </li>
                                                    <div>
                                                        <DropdownMenu.Root>
                                                            <DropdownMenu.Trigger className={styles.dropbtn}  asChild>
                                                                <button aria-label="Customise options">
                                                                <BsThreeDotsVertical className={styles.icon} />
                                                                </button>
                                                            </DropdownMenu.Trigger>
                                                            <DropdownMenu.Portal>
                                                                <DropdownMenu.Content className={styles.dropdown_content} sideOffset={5}>
                                                                    <DropdownMenu.Item className={styles.Item} onClick={() =>{
                                                                        doneTask(todo)}}>Done</DropdownMenu.Item>
                                                                    <DropdownMenu.Item className={styles.Item} onClick={() =>{
                                                                        editTask(todo)}}>Edit</DropdownMenu.Item>
                                                                    <DropdownMenu.Item className={styles.Item} onClick={() =>{                           
                                                                        deleteTask(todo)}}>Delete</DropdownMenu.Item>
                                                                </DropdownMenu.Content>
                                                            </DropdownMenu.Portal>
                                                        </DropdownMenu.Root>
                                                        
                                                    </div>
                                                </div>
                                            )
                                        })
                                        : <div>
                                            <h6>Wating For You To Enter Task</h6>
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