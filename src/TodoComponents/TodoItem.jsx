import React from 'react'

function TodoItem({ item, index, maintask, setMainTask }) {

    const deleteHandler = (i) => {
        let copytask = [...maintask]
        copytask.splice(i, 1)
        setMainTask(copytask)
    }

    return (
        <>
            <div className='flex items-center justify-between mb-5 w-2/3'>
                <h5 className='text-2xl font-semibold'>{item.title}</h5>
                <h6 className='text-lg font-medium'>{item.desc}</h6>
            </div>
            <button onClick={() => {
                deleteHandler(index)
            }}
                className='bg-red-400 text-white px-4 py-2 rounded font-bold '>Delete</button>

        </>
    )
}

export default TodoItem