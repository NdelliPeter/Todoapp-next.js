import 'bootstrap/dist/css/bootstrap.css'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'






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


    useEffect(() => {
        /**
         * On page load we need to check if todoData exist in the local storage and if it exist we get the value and set it to the todo value
         */
        const objectData =  localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : [];
        setTodo( objectData)
        // console.log(objectData);
    }, []);


    const submitTodo = (e) => {
        e.preventDefault();

        const data = {
            title:e.target.title.value,
            date: e.target.date.value,
            startTime: e.target.startTime.value,
            endTime: e.target.endTime.value
        }
        todo.push(data);


        
        const stringData = JSON.stringify(todo)
        setTodo(todo)
        localStorage.setItem("todoData", stringData)

        // const objectData =JSON.parse(localStorage.getItem("data"))
        // setTodo(objectData)
        // console.log(objectData)
    }

    function display(item) {
        return [item.title, item.date, item.startTime, item.endTime].join("")
    }



    const list = () => {
        localStorage.getItem('data')
    }

    return (
        <div>
            <div className='container-fluid mt-5 d-flex justify-content-center align-items-center'>
                <form id='test' className='row justify-content-center align-items-center' name='myForm' onSubmit={submitTodo}>
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
                        <div className='card' id={styles.list}>
                            <ul>
                                <div></div>
                                <div>
                                    {
                                        todo.map(display)
                                    }
                                </div>
                            </ul>
                        </div>

                    </div>
                    </div>
                </div>
        </div>
    )
} 

