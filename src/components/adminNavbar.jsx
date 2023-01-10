import { Link } from "react-router-dom";
import "../styles/adminNavbar.css";

const AdminNavbar = () => {
  return (
    <div className="adminNavbar">
      {/* <div className="navbar1"> */}
      <div className="logo">
        {/* <img src="images/a2.png" alt="" className="avatar2" /> */}
        <h1>Admin Portal</h1>
      </div>
      <div className="list">
        <ul>
          <li>
            <Link to="/admin/">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/add-book">Add Books</Link>
          </li>
          <li>
            <Link to="/admin/add-user">Add Users</Link>
          </li>
          <li>
            <Link to="/admin/book-list">Book List</Link>
          </li>
          <li>
            <Link to="/admin/user-list">Users List</Link>
          </li>
          <li>
            <Link to="/" className="lgbtn">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
    // </div>
  );
};
export default AdminNavbar;
