// import {Link} from "react-router-dom"
// import './Home.css'

// const Header = () => {
//   return (
//     <div className='header'>
//         <nav>
//         <ul>
//         <li>
//         <h1>Todo App</h1>
//         </li>
//         <li className="col1">
//           <Link to={`/`}>Home</Link>
//         </li>
//         <li>
//           <Link to={`/dashboard/`}>Dashboard</Link>
//         </li>
//         <li>
//           <Link to={`/login/`}>Logout</Link>
//         </li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

// export default Header

import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <h1>Todo App</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/starred">Logout</Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Header