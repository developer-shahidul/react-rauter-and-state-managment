import "./App.css";

function App() {
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          alert("users added successfully");
          form.reset();
        }
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
    </>
  );
}

export default App;
