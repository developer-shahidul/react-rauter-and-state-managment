import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const newUser = { name, email };
    console.log(newUser);

    fetch("http://localhost:5000/users", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("users added successfully");
          form.reset();
        }
        const newUser = [...user, data];
        setUser(newUser);
      });
  };

  return (
    <>
      <h1>Simple CRUD</h1>
      <form action="" onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br /> <br />
        <input type="email" name="email" id="" />
        <br /> <br />
        <input type="submit" name="add user" id="" />
      </form>
      <div>
        {user.map((p, index) => (
          <p key={`${p.id}-${index}`}>
            {p.name} : {p.email}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
