import * as yup from 'yup'




export const schema = yup.object().shape({
    title: yup.string().required(),
    date: yup.date().required(),
    startTime: yup.string().required(),
    endTime: yup.string().when(['startTime'],{
        is: (startTime, value) => {
            if( startTime >= value){
                return true;
            }else {
                return false;
            }
        },
        then: (schema) =>{
            schema 
            required('endTime')
        }
    })
})