import React, { useState } from 'react'
import Input from '../comman/Input';

function AddTodo({ maintask, setMainTask }) {

    const [title, settitle] = useState("")

    const [desc, setDesc] = useState("")
    // const [maintask, setMainTask] = useState([])

    const submitHandler = (e) => {
        e.preventDefault();
        setMainTask([...maintask, { title, desc }]);
        settitle("");
        setDesc("");
        console.log(maintask)
    }

    return (
        <>
            {/* form  */}
            <form onSubmit={submitHandler}>
                <Input  type={'text'}  placeholder="Enter title here...." value={title} onChangeValue={settitle}/>
                <Input  type={'email'}  placeholder="Enter email  here...." value={desc} onChangeValue={setDesc}/>
                <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
            </form>
        </>
    )
}

export default AddTodo