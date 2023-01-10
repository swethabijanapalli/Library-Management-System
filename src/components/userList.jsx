import { useState, useEffect } from "react";
import "../styles/userList.css";

const UserList = () => {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch(" http://localhost:4000/users");
      let data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);
  let handleDelete = (name, phone) => {
    setUsers(users.filter((x) => x.name !== name));
    alert(`${name} has been deleted`);
  };
  return (
    <div className="userList">
      <h1>User List: {users.lenght}</h1>
      <div className="user_section">
        {users.map((data) => (
          <div className="user">
            <h3>
              <b>Name:</b> {data.name}
            </h3>
            <h5>
              <b>Email:</b> {data.email}
            </h5>
            <h5>
              <b>Age:</b> {data.age}
            </h5>
            <h5>
              <b>Phone:</b> {data.phone}
            </h5>
            <button onClick={() => handleDelete(data.name, data.phone)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
