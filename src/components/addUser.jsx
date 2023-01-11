import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/addUser.css";

const AddUser = () => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");

  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let userData = {
      name,
      age,
      email,
      phoneNumber,
    };
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    alert("user added successfully");
    navigate("/admin/user-list");
  };

  return (
    <div className="adduserHome">
      <div className="addUser">
        <h1>Add User</h1>
        <div className="user_form">
          <form action="" onSubmit={handleSubmit}>
            <div className="name">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="enter name"
              />
            </div>
            <div className="age">
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                type="text"
                min="1"
                placeholder="enter age"
              />
            </div>
            <div className="email">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="enter email"
              />
            </div>
            <div className="phoneNumber">
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="tel"
                minLength="10"
                maxLength="10"
                placeholder="enter phone number"
              />
            </div>
            <button>Add User</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
