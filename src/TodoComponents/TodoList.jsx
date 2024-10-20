import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ maintask, setMainTask }) {



    return (
        <div>
            <div className='p-8 bg-slate-200'>
                <ul>
                    {maintask.length > 0 ? maintask.map((t, i) => {
                        return (
                            <li key={i} className='flex items-center justify-between mb-8'>

                                <TodoItem item={t} index={i} setMainTask ={setMainTask} maintask={maintask}/>
                            </li>
                        );
                    })
                        : <h2>No Task Available</h2>
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodoList