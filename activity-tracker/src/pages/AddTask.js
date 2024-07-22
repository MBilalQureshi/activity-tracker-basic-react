import React, { useEffect, useState } from 'react'
import css from '../styles/AddTask.module.css'
import GenerateTask from './GenerateTask'

function AddTask() {
    const [activities, setActivities] = useState({
        name:'',
        days : [{
            id : null,
            isActive: false
        }]
    })

    const [name, setName] = useState('')
    const [task, setTask] = useState([])
    const [days, setDays] = useState(null)

    function getDaysInCurrentMonth() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        return daysInMonth;
      }

    useEffect(() => {
        setDays(getDaysInCurrentMonth())
    },[])


    const removeTask = (idx) => {
        setTask(task.filter((_, index) => { return index !== idx; }));
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(name !== ''){
            setTask([...task, name])
            setName('')
          }

        setActivities({
            name: name,
            days: []
        })
    }
  return (
    <div className={css.AddTask}>
        <h2>Monthly Activity Tracker!</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <input placeholder='e.g coding'
                type='text'
                name='add-task'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <button type='submit'>Add Task</button>
                {
                    task.map((name, index)=> {
                        return <GenerateTask key={index} name={name} days={days} index={index} removeTask={removeTask}/>
                    })
                }
            </div>
        </form>
    </div>
  )
}

export default AddTask