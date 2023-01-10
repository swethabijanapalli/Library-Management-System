import { Link, useNavigate } from "react-router-dom";
import "../styles/userLogin.css";

const UserLogin = () => {
  let navigate = useNavigate();
  let login = () => {
    navigate("/user/");
  };
  return (
    <div className="userlogin">
      <div className="form-container-card1">
        <img src="images/u1.jpg" alt="" className="avatar1" />
        <h1>Login as User</h1>
        <div className="form_input1">
          <form onSubmit={login}>
            <div className="email">
              {/* <label htmlFor="Email">Email</label> */}
              <p>Email</p>
              <input type="email" required placeholder="email address" />
            </div>
            <div className="password">
              {/* <label htmlFor="Password">Password</label> */}
              <p>Password</p>
              <input type="password" required placeholder="email password" />
            </div>
            <button className="loginbtn1">Login</button>
            <br />
            <Link>Forgot your password?</Link>
            <br />
            <Link>Don't have an account?</Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UserLogin;
