import 'bootstrap/dist/css/bootstrap.css'
import styles from '@/styles/Home.module.css'
import { useState, useEffect, useRef } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";





export default function AddTask ({addTask}) {


    // const [inputTask, setInputTask] = useState('')
    // const [inputDate, setInputDate] = useState('')
    // const [startTime, setStartTime] = useState('')
    // const [endTime, setEndTime] = useState('')

    // const [todo, setTodo] = useState([])

    // // const handleTask = (task) =>{
    // //     task.preventDefault()

    // //     setInputTask(task.target.title.value)
    // //     setInputDate(task.target.date.value)
    // //     setStartTime(task.target.startTime.value)
    // //     setEndTime(task.target.endTime.value)

    // //     todo.push({
    // //         title:{inputTask},
    // //         date:{inputDate},
    // //         startTime:{startTime},
    // //         endTime:{endTime}
    // //     });

    // // }




    const submitTodo = (e) => {
        e.preventDefault();
        if (e.target.title.value == ''){
            alert('Please add task')
        }else{
            const data = {
                title:e.target.title.value,
                date: e.target.date.value,
                startTime: e.target.startTime.value,
                endTime: e.target.endTime.value
            }

            addTask(data)
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
                                name="title"
                                />
                            <input 
                                className='col-sm-4 col-md-4 col-lg-4' 
                                id={styles.otherInput} 
                                type={'date'} 
                                placeholder={'Date'} 
                                name="date"
                                />
                            <input 
                                className='col-sm-4 col-md-3 col-lg-3' 
                                id={styles.otherInput} 
                                type={'time'} 
                                placeholder={'Start Time'} 
                                name="startTime"
                                />
                            <input 
                                className='col-sm-4 col-md-3 col-lg-3' 
                                id={styles.otherInput} 
                                type={'time'} 
                                placeholder={'End Time'} 
                                name="endTime"
                                />
                        </div>

                        <div className='col-sm-8 col-md-3 col-lg-3'>
                            <button 
                                type='summit'
                                className='col-sm-12 col-md-12 col-lg-12' 
                                id={styles.addBtn}
                            >ADD</button> 
                        </div>
                    </div>

                </form>
   
            </div>


        </div>
    )
} 

