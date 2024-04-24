import React, { useEffect, useState } from 'react'
import MyTodo from '../../components/Todo/MyTodo'
import Form from '../../components/Todo/Form'
import axios from 'axios'

const DashboardHome = () => {
  
  const [MyTodoList, setMyTodoList] = useState([])

  const getTodos = async() =>{
      try{
        const response = await axios.get(`https://todo-api-bc0z.onrender.com/api/todo`)
        

        console.log(response)

        setMyTodoList(response.data)
      }catch(error){
        console.log(error)
        alert(error.message)
      }
    }

    useEffect(() =>{
      //api/todos
      getTodos()
    }, [])

 
  return (
        <>
        <Form />
        <MyTodo TodoList={MyTodoList}/>
        </>
  )
}

export default DashboardHome