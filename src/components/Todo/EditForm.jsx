import React, {useState, useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios'

const EditForm = () => {
    const [MyTodoList, setMyTodoList] = useState(
      JSON.parse(localStorage.getItem("myData"))
    );
  
    const [todoData, setTodoData] = useState({
      title: "",
      description: "",
      isCompleted: false,
    });
  
    const handleChange = (event) => {
      // const { name, value } = event.target;
      // setTodoData({ ...todoData, [name]: value });

      const {name, value, checked} = event.target

      console.log(event)

      if(name == "isCompleted" && checked){
          setTodoData({
              ...todoData,
              [name]: true
          })

       
      }else if(name == "isCompleted" && !checked){
          setTodoData({
              ...todoData,
              [name]: true
          })
        }else{
          setTodoData({ ...todoData, [name]: value });
        }
    };


    const {id} = useParams()

    const getSingleTodo = async(pathId) => {
      try{
        const response = await axios.get(`https://todo-api-bc0z.onrender.com/api/todo/${pathId}`)
        setTodoData(response.data)
      }catch(error){
        console.log(error)
      }
    }
  
    useEffect(() => {
      getSingleTodo(id)
    }, [id])
  
  
    const handleSubmit = async(event) => {
      event.preventDefault()
      try{
        await axios.put(`https://todo-api-bc0z.onrender.com/api/todo/${id}`, {
          title: todoData.title,
          description: todoData.description,
          isCompleted: todoData.isCompleted
        })

        setTodoData({ title: "", description: "" });
        
        window.location.href = "/dashboard"

      }catch(error){
        console.log(error)
      }

    };
  
    useEffect(() => {
      localStorage.setItem("myData", JSON.stringify(MyTodoList));
    }, [todoData]);
  
    const [error, setError] = useState({
      title: "",
      description: "",
    });
  
    const titleRef = useRef("");
    const descriptionRef = useRef("");
  
    const handleBlur = () => {
      const titleValue = titleRef.current.value;
      const descriptionValue = descriptionRef.current.value;
  
      if (titleValue.length < 5) {
        setError((prevError) => ({
          ...prevError,
          title: "Title must be more than 5 characters",
        }));
      } else if (descriptionValue.length < 5) {
        setError((prevError) => ({
          ...prevError,
          description: "Description must be more than 5 characters",
        }));
      } else {
        setError((prevError) => ({ ...prevError, title: "", description: "" }));
      }
    };
  
    return (
      <>
        <form
          style={{ backgroundColor: "darkblue", padding: "3%" }}
          onSubmit={handleSubmit}
        >
          <h3 style={{ color: "#fff" }}>Edit Todo Form</h3>
          <input
            type="text"
            name="title"
            value={todoData.title}
            placeholder="Enter Todo Title"
            onChange={handleChange}
            onBlur={handleBlur}
            ref={titleRef}
          />
  
          {<p style={{ color: "red" }}>{error.title}</p>}
  
          <br />
          <br />
          <input
            type="text"
            name="description"
            value={todoData.description}
            placeholder="Enter Todo Description"
            onChange={handleChange}
            onBlur={handleBlur}
            ref={descriptionRef}
          />
          {<p style={{ color: "red" }}>{error.description}</p>}
          <br />
          <br />

          <input type="checkbox" name="isCompleted"  onChange={handleChange} checked={todoData.isCompleted}/> 
          <label style={{color:"white"}}>isCompleted</label><br /> <br />

          <button onClick={handleSubmit}> Update </button>
        </form>
      </>
    );
  };
export default EditForm