import React, {useEffect, useRef, useState} from "react";
import axios from "axios";


const Form = () => {
  const [MyTodoList, setMyTodoList] = useState([])
  
  const [todoData, setTodoData] = useState({
    title: "",
    description: "",
    isCompleted: false,
  })



  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodoData({ ...todoData, [name]: value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    try{
      // const response = await fetch(`https://todo-api-bc0z.onrender.com/api/todo`,{
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     title: todoData.title,
      //     description: todoData.description,
      //     isCompleted: todoData.isCompleted
      //   })
      // })

      if(todoData.title.length < 5 || todoData.description.length < 5){
        alert("Please enter at least 5 characters")
        return
      }

      const response = await axios.post(`https://todo-api-bc0z.onrender.com/api/todo`,{
        title: false,
        description: todoData.description,
        isCompleted: todoData.isCompleted,
      })

      if(response){
        console.log("after response")
        setTodoData({title:"",description:"",isCompleted:false})
        window.location.reload()
      }
      
    }catch(error){
      console.log(error)
    }
  };


  const [error, setError] = useState({
    title: "",
    description: "",
  })


  const titleRef = useRef('')
  const descriptionRef = useRef('')


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
        <h3 style={{ color: "#fff" }}>Create Todo Form</h3>
        <input
          type="text"
          name="title"
          value={todoData.title}
          placeholder="Enter Todo Title"
          onChange={handleChange}
          onBlur={handleBlur}
          ref={titleRef}
        />

        {<p style={{color: 'red'}}>{error.title}</p>}

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
        {<p style={{color: 'red'}}>{error.description}</p>}
        <br />
        <br />
        <button>Create</button>
      </form>
    </>
  );
};

export default Form;