import React, { useState } from 'react'
import AddTodo from './TodoComponents/AddTodo'
import TodoList from './TodoComponents/TodoList'
import Heading from './TodoComponents/Heading'


const App = () => {
  const [maintask, setMainTask] = useState([])

  return (
    <>
      <Heading />
      <AddTodo maintask={maintask} setMainTask={setMainTask} />
      <hr />
      <TodoList maintask={maintask} setMainTask={setMainTask} />

    </>

  )
}

export default App