import 'bootstrap/dist/css/bootstrap.css'
import styles from '@/styles/Home.module.css'



export default function List () {
    return (
        <div className='container-fluid p-3 mt-5'>
            <div className='row justify-content-center align-items-center'>
            <div className='col-sm-9 col-md-7 col-lg-7'>
                <div className='card' id={styles.list}>
                {/* <ul>
                    {
                        todo.length >=1 ? todo.map((todo, idx) =>{
                            return <text key={idx}>{todo}</text>
                        })
                        : 'Waiting for Task'
                    }
                </ul> */}
                {
                    localStorage.getItem(data)
                }
                </div>

            </div>
            </div>
        </div>
    )
}