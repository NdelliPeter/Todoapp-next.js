import 'bootstrap/dist/css/bootstrap.css'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'






export default function AddTask () {


    const [inputTask, setInputTask] = useState('')
    const [inputDate, setInputDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')

    const [todo, setTodo] = useState([])

    const handleTask = (task) =>{
        task.preventDefault()

        setInputTask(task.target.title.value)
        setInputDate(task.target.date.value)
        setStartTime(task.target.startTime.value)
        setEndTime(task.target.endTime.value)

        todo.push({
            title:{inputTask},
            date:{inputDate},
            startTime:{startTime},
            endTime:{endTime}
        });

    }




    const submitTodo = (e) => {
        e.preventDefault();

        const data = {
            title:e.target.title.value,
            date: e.target.date.value,
            startTime: e.target.startTime.value,
            endTime: e.target.endTime.value
        }

        const array= []
        array.push(data)


        let stringing = JSON.stringify(array)
        localStorage.setItem(array, stringing)
        console.log(localStorage)
    }


    const display = (e) => {
        e.preventDefault()

        setTodo({
            submitTodo,
            ...todo
        })
        localStorage.getItem('array')
    }

    const list = () => {
        localStorage.getItem('data')
    }

    return (
        <div>
            <div className='container-fluid mt-5 d-flex justify-content-center align-items-center'>
                <form id='test' className='row justify-content-center align-items-center' name='myForm'  onSubmit={submitTodo}>
                    <div className='row d-flex '>
                        <div className='col-sm-9 col-md-9 col-lg-9'>
                            <input 
                                className='col-sm-12 col-md-12 col-lg-12 ' 
                                id={styles.inputTask} 
                                type={'string'} 
                                placeholder={'Input Task'}
                                name="title"
                                />
                            <input 
                                className='col-sm-6 col-md-3 col-lg-3' 
                                id={styles.otherInput} 
                                type={'date'} 
                                placeholder={'Date'} 
                                // onChange={handleDate}
                                name="date"
                                />
                            <input 
                                className='col-sm-6 col-md-3 col-lg-3' 
                                id={styles.otherInput} 
                                type={'time'} 
                                placeholder={'Start Time'} 
                                // onChange={handleStartTime}
                                name="startTime"
                                />
                            <input 
                                className='col-sm-6 col-md-3 col-lg-3' 
                                id={styles.otherInput} 
                                type={'time'} 
                                placeholder={'End Time'} 
                                // onChange={handleEndTime}
                                name="endTime"
                                />
                        </div>

                        <div className='col-sm-7 col-md-3 col-lg-3'>
                            <button 
                                type='summit'
                                className='col-sm-12 col-md-12 col-lg-12' 
                                id={styles.addBtn}
                            >ADD</button> 
                        </div>
                    </div>

                </form>
   
            </div>


            <div className='container-fluid p-3 mt-5'>
                    <div className='row justify-content-center align-items-center'>
                    <div className='col-sm-9 col-md-7 col-lg-9'>
                        <div className='card' onChange={list} id={styles.list}>
                            
                        <ul>
                            {

                                todo.length >=1 ? todo.map((array, idx) =>{
                                    return (
                                        <div>
                                            <li key={idx}>{array}</li>
                                        </div>
                                        
                                    ) 
                                })
                                : 'Waiting for Task'
                            }
                        </ul>
                        </div>

                    </div>
                    </div>
                </div>
        </div>
    )
} 

