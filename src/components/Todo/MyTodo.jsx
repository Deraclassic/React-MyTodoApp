import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const MyTodo = ({TodoList}) => {

  const[showForm, setShowForm] = useState(false)

  const ToggleForm = () => {
    setShowForm(showForm => !showForm)
  }

  const deleteTodo = async (id) => {
    try{
      if(window.confirm('Are you sure you want to delete')){
        const response = await axios.delete(`https://todo-api-bc0z.onrender.com/api/todo/${id}`)
        if(response.status == 204){
          window.alert('you pressed ok')
          window.location.reload()
        }else{
          window.alert(`${response.status}`)
        }
    }else{
      window.alert('you pressed cancel')
    }
  }catch(error){
    console.log(error)
  }
}
  return (
    <div>
        <h3>My Todo</h3>
        <button onClick={ToggleForm}>{showForm ? 'Hide Todo' : 'Create Todo'}</button>


        {TodoList.map((todolist, index) => (
          <div key={index}>
           <ul>
           <li><Link to={`/dashboard/todo/${todolist.id}`}>
            {todolist.title}</Link></li>
           <li>{todolist.isCompleted ? "completed": "pending"}</li>
           </ul> 
           <button><Link to ={`/dashboard/edit/${todolist.id}`}>Edit Todo</Link> </button><br/>
           <button onClick={() => deleteTodo(todolist.id)}>Delete Todo</button>
           </div>
        ))}
       
    </div>
  )
}

export default MyTodo