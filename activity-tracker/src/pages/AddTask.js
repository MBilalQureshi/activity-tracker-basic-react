import React, { useState } from 'react'
import css from '../styles/AddTask.module.css'
import GenerateTask from './GenerateTask'

function AddTask() {
    const [name, setName] = useState('')
    const [task, setTask] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(name)
        console.log(task)
        if(name){
            setTask([...task, name])
            setName('')
          }
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
                    task.map(name => {
                        return <GenerateTask key={name} name={name} />
                    })
                }
            </div>
        </form>
    </div>
  )
}

export default AddTask