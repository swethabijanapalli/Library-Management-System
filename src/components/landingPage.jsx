import { Link } from "react-router-dom";
import "../styles/landingPage.css";

const LandingPage = () => {
  return (
    <div className="body">
      <div className="landingpage">
        <div className="selectLoginType">
          <h1>Library Management System</h1>
          <div className="loginpage">
            <div className="btn1">
              <img width="80px" src="images/a2.png" alt="" />
              <br />
              <Link to="/admin-login">
                <button> Admin Login </button>
              </Link>
            </div>
            <div className="btn2">
              <img width="80px" src="images/u1.jpg" alt="" />
              <br />
              <Link to="/user-login">
                <button> User Login </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
