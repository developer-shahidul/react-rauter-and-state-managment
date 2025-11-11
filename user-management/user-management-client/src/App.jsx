import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    // 👉 ওই element-এর তথ্য (value, attribute, class ইত্যাদি) পাওয়ার জন্য target bebohar hoi।
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.JSON())
      .then((data) => {
        console.log("inside post response", data);
      });
  };
  return (
    <>
      <h1>User Management System</h1>
      <h3>Numbers of Users : {users.length}</h3>
      <form action="" onSubmit={handleAddUser}>
        <input
          style={{ padding: 10, borderRadius: 8 }}
          type="text"
          name="name"
        />
        <br /> <br />
        <input
          style={{ padding: 10, borderRadius: 8 }}
          type="email"
          name="email"
        />
        <br />
        <br />
        <input
          style={{ padding: 10, borderRadius: 8 }}
          type="submit"
          value="add user"
        />
      </form>
      <div>
        {users.map((user) => (
          <p key={user.id}>
            {user.id} : {user.name} : {user.email}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
