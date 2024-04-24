import './App.css'
import React from "react";
import Home from "./pages/Home/Home";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import Starred from './pages/Dashboard/Starred'
import DashboardHome from './pages/Dashboard/DashboardHome';
import Contact from './pages/Dashboard/Contact';
import History from './pages/Dashboard/History';
import Login from './pages/Login';
import SingleTodo from './components/Todo/SingleTodo';
import EditForm from './components/Todo/EditForm';


function App() {
  const myrouter = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/dashboard",
      element: <Dashboard/>,
      children:[
        {
          path: "",
          element:<DashboardHome/>
        },
        {
          path: "starred",
          element:<Starred/>
        },
        {
          path: "contacts",
          element:<Contact/>
        },
        {
          path: "history",
          element:<History/>
        },
        {
          path: "todo/:id",
          element: <SingleTodo/>
        },
        {
          path: "edit/:id",
          element: <EditForm/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={myrouter}/>
    </div>
  );
}

export default App;
