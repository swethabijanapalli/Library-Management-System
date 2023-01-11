import { Link } from "react-router-dom";
import "../styles/userNavbar.css";

const UserNavbar = () => {
  return (
    <div className="userNavbar">
      {/* <div className="navbar1"> */}
      <div className="user-logo">
        {/* <img src="images/a2.png" alt="" className="avatar2" /> */}
        <h1>User Portal</h1>
      </div>
      <div className="user-list">
        <ul>
          <li>
            <Link to="/user/">Dashboard</Link>
          </li>
          <li>
            <Link to="/user/book-list">Book List</Link>
          </li>
          <li>
            <Link to="/" className="user-lgbtn">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
    // </div>
  );
};

export default UserNavbar;
