import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const SingleTodo = () => {

  const[SingleTodo, setSingleTodo] = useState({})

  const {id} = useParams()

  const getSingleTodo = async(pathId) => {
    try{
      const response = await axios.get(`https://todo-api-bc0z.onrender.com/api/todos/${pathId}`)
      setSingleTodo(response.data)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    getSingleTodo(id)
  }, [id])

  return (
    <div>
        <h2>TodoId: {id}</h2>
        <p>Title: {SingleTodo.title}</p>
        <p>Description: {SingleTodo.description}</p>
        </div>
  )
}

export default SingleTodo