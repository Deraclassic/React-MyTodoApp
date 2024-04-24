import {Link} from "react-router-dom"
import './Dashboard.css';

const Sidebar = () => {
    return(
      <div className="sidebar col-3">
        <h3>Todo App</h3>
  
      <nav>
        <ul>
        <li>
            <Link to={`/`}>Home</Link>
          </li>
        <li>
            <Link to={`starred`}>Starred</Link>
          </li>
          <li>
            <Link to={`contacts`}>Contacts</Link>
          </li>
          <li>
            <Link to={`history`}>History</Link>
          </li>
        </ul>
      </nav>
  
      {/* other elements */}
    </div>
    )
  }

  export default Sidebar