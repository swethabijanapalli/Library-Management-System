import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/adminLogin.css";

const AdminLogin = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  let login = (e) => {
    e.preventDefault();
    let data = { email, password };
    console.log(data);
    if (email == "admin@gmail.com" && password == 1234) {
      navigate("/admin/");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div className="adminlogin">
      <div className="form-container-card">
        <img src="images/a2.png" alt="" className="avatar" />
        <h1>Login as Admin</h1>
        <div className="form_input">
          <form onSubmit={login}>
            <div className="email">
              {/* <label htmlFor="">Email</label> */}
              <p>Email</p>
              <input
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email address"
              />
            </div>
            <div className="password">
              {/* <label htmlFor="">Password</label> */}
              <p>Password</p>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="email password"
              />
            </div>
            <button className="loginbtn">Login</button>
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
export default AdminLogin;
