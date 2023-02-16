import 'bootstrap/dist/css/bootstrap.css'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import moment from 'moment'
import {Date} from 'yup'
import parse from 'date-fns' 

// const moment =require("moment");
// moment().format("MM DD YYYY")




export default function AddTask ({addTask, todos, setTodos, editTask, editTodo, setEditTodo}) {

    // console.log(editTodo);

    const schema = yup.object().shape({
        title: yup.string()
        .trim('Please input task cannot contain just spaces')
        .required('please fill in a Task properly'),
        date: yup.string().required('Please input Date'),
        startTime: yup.string().required(),
        endTime: yup.string()
        .required("end time cannot be empty")
        .test("is-greater", "end time should be greater", function(value) {
          const { startTime } = this.parent;
          return moment(value, "HH:mm").isSameOrAfter(moment(startTime, "HH:mm"));
        })
        // complete: yup.boolean(false)
    }).required()
    


    const { register, handleSubmit, setValue,setError, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema)
    })



    function func() {
        function ff(s) {
            var pt = (Math.random().toString(16)+"000000000").substr(2,8);
            return s ? "-" + pt.substr(0,4) + "-" + pt.substr(4,4) : pt ;
        }
        return ff() + ff(true) + ff(true) + ff();
    }
    const id =func()


    const [inputTask, setInputTask] = useState('')
    const [inputDate, setInputDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')


    // const editUpdate = (data) => {
    //     const newTodo ={data}
    //     addTask(newTodo)
    //     setEditTodo('')
    // }



    useEffect (() => {
        if(editTodo) {
            setInputTask(setValue('title', editTodo.title ) )
            setInputDate(setValue('date', editTodo.date ))
            setStartTime(setValue('startTime', editTodo.startTime))
            setEndTime(setValue('endTime', editTodo.endTime))

        }else {
            setInputTask('');
            setInputDate('')
            setStartTime('')
            setEndTime('')

        }

    },[setInputTask, setInputDate, setStartTime, setEndTime, editTodo] )

    const submitTodo = (data) => {
        // console.log(data);
        if(!editTodo) {
            [
                {
                  type: "string",
                  name: "title",
                  message: "Please fill in your Task properly"
                },
                {
                  type: "date",
                  name: "date",
                  message: "Please input a Date"
                },
                {
                    type: "time",
                    name: "startTime",
                    message: "Please input a start time"
                },
                {
                    type: "time",
                    name: "endTime",
                    message: "Please input a valid end time"
                }
            ].forEach(({ name, type, message }) =>
                setError(name, { type, message })
              );
            data.complete = false
            addTask(data)
            reset()            
        }else {
            addTask(data)
            reset()
            setEditTodo('')
    }

        // if (!editTodo) {
        //     if (e.target.title.value == '' || e.target.title.value == '   ' || e.target.date.value == '' || e.target.startTime.value == '' || e.target.endTime.value == ''){
        //         alert('Please fill the entire form')
        //     }else{
        //         const data = {
        //             id: id,
        //             title:e.target.title.value,
        //             date: e.target.date.value,
        //             startTime: e.target.startTime.value,
        //             endTime: e.target.endTime.value
        //         }
        //         console.log(data);
        //         addTask(data)
        //         setInputTask('');
        //         setEndTime('');
        //         setInputDate('');
        //         setStartTime('');
        //     }
        // }else {
        //     editUpdate(id,e.target.title.value, e.target.date.value, e.target.startTime.value, e.target.endTime.value )
        // }
    } 


    return (
        <>
            <div className='container-fluid mt-5 d-flex justify-content-center align-items-center'>
                <form id='addTaskForm' className='row justify-content-center align-items-center' onSubmit={handleSubmit(submitTodo)}>
                    
                            <div className='col-sm-12 col-md-10 col-lg-10 '>
                                <input 
                                    className='col-sm-12 col-md-12 col-lg-12 ' 
                                    id={styles.inputTask} 
                                    type={'string'} 
                                    placeholder={'Input Task'}
                                    {...register('title', {value: inputTask})}
                                    /><br/>
                                    {errors.title && <span className='text-danger font-strong'>{errors.title.message}</span>}
                            </div>
                            
                            <div className='col-sm-12 col-md-3 col-lg-3' >
                                <input 
                                    className='col-sm-12 col-md-12 col-lg-12' 
                                    id={styles.otherInput} 
                                    type={'date'} 
                                    placeholder={'Date'} 
                                    {...register('date', {value: inputDate})}                                
                                    /><br/>
                                    {errors.date && <span className='text-danger'>{errors.date.message}</span>}
                            </div>

                            <div className='col-sm-12 col-md-3 col-lg-3' >
                                <input 
                                    className='col-sm-12 col-md-12 col-lg-12' 
                                    id={styles.otherInput} 
                                    type={'time'} 
                                    placeholder={'Start Time'}
                                    {...register('startTime', {value: startTime})}                                
                                    /><br/>
                                    {errors.startTime && <span className='text-danger'>{errors.startTime.message}</span>}
                            </div>

                            <div className='col-sm-12 col-md-3 col-lg-3'>
                                <input 
                                    className='col-sm-12 col-md-12 col-lg-12' 
                                    id={styles.otherInput} 
                                    type={'time'} 
                                    placeholder={'End Time'} 
                                    {...register('endTime', {value: endTime})}                                
                                    /><br/>
                                    {errors.endTime && <span className='text-danger'>{errors.endTime.message}</span>}
                            </div>

                            <div className='col-sm-12 col-md-9 col-lg-9' >
                                <button 
                                    type='summit'
                                    className='col-sm-12 col-md-12 col-lg-12' 
                                    id={styles.addBtn}
                                >{editTodo ? 'Edit' : 'ADD'}</button> 
                            </div>
    
                    
                </form>
   
            </div>


        </>
    )
} 

