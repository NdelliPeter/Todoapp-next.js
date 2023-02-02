import 'bootstrap/dist/css/bootstrap.css'
import styles from '@/styles/Home.module.css'
import { useState, useEffect, useRef } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";





export default function AddTask ({addTask, todos, setTodos, editTodo, setEditTodo}) {


    const [inputTask, setInputTask] = useState('')
    const [inputDate, setInputDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')

    // const [todo, setTodo] = useState([])

    // const inputTaskRef =useRef(null);
    // const inputDateRef =useRef(null);
    // const startTimeRef =useRef(null);
    // const endTimeRef =useRef(null);

    const handleTask = (task) =>{
        console.log(handleTask);
        task.preventDefault()

        task.target.title.reset();

    }


    const updatedList = (title, date, startTime, endTime) => {
        const newTodo =todos.map((todoItem) => {
            todos.indexOf(todoItem) == todos.indexOf(todos) ? {title, date, startTime, endTime} : todoItem
        })
        setTodos(newTodo)
        setEditTodo("")
    }



    useEffect (() => {
        if(editTodo) {
            setInputTask(editTodo.title)
            setInputDate(editTodo.date)
            setStartTime(editTodo.startTime)
            setEndTime(editTodo.endTime)
        }else {
            setInputTask('');
            setEndTime('');
            setInputDate('');
            setStartTime('');
        }

    },[setInputTask, setInputDate, setStartTime, setEndTime, editTodo] )

    const submitTodo = (e) => {
        e.preventDefault();

        if(!editTodo){
            if (e.target.title.value == '' || e.target.title.value == '   ' || e.target.date.value == '' || e.target.startTime.value == '' || e.target.endTime.value == ''){
                alert('Please fill the entire form')
            }else{
                const data = {
                    title:e.target.title.value,
                    date: e.target.date.value,
                    startTime: e.target.startTime.value,
                    endTime: e.target.endTime.value
                }
                addTask(data)
                setInputTask('');
                setEndTime('');
                setInputDate('');
                setStartTime('');
            }
        }else {
            updatedList(inputTask, inputDate, startTime, endTime)
        }
    } 


    return (
        <div>
            <div className='container-fluid mt-5 d-flex justify-content-center align-items-center'>
                <form id='test' className='row justify-content-center align-items-center' name='myForm' onSubmit={submitTodo}>
                    <div className='row d-flex '>
                        <div className='col-sm-12 col-md-9 col-lg-9'>
                            <input 
                                className='col-sm-12 col-md-12 col-lg-12 ' 
                                id={styles.inputTask} 
                                type={'string'} 
                                placeholder={'Input Task'}
                                value={inputTask}
                                onChange={(e)=>{setInputTask(e.target.value)}}
                                name="title"
                                />
                            <input 
                                className='col-sm-4 col-md-4 col-lg-4' 
                                id={styles.otherInput} 
                                type={'date'} 
                                placeholder={'Date'} 
                                value={inputDate}
                                onChange={(e)=>{setInputDate(e.target.value)}}

                                name="date"
                                />
                            <input 
                                className='col-sm-4 col-md-3 col-lg-3' 
                                id={styles.otherInput} 
                                type={'time'} 
                                placeholder={'Start Time'}
                                value={startTime}
                                onChange={(e)=>{setStartTime(e.target.value)}}

                                name="startTime"
                                />
                            <input 
                                className='col-sm-4 col-md-3 col-lg-3' 
                                id={styles.otherInput} 
                                type={'time'} 
                                value={endTime}
                                placeholder={'End Time'} 
                                onChange={(e)=>{setEndTime(e.target.value)}}

                                name="endTime"
                                />
                        </div>

                        <div className='col-sm-8 col-md-3 col-lg-3'>
                            <button 
                                type='summit'
                                className='col-sm-12 col-md-12 col-lg-12' 
                                id={styles.addBtn}
                            >{editTodo ? 'EDIT' : 'ADD' }</button> 
                        </div>
                    </div>

                </form>
   
            </div>


        </div>
    )
} 

