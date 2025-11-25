//

import { useLoaderData } from "react-router-dom";

const Update = () => {
  const usersLoader = useLoaderData();
  console.log(usersLoader);

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const updatedUser = { name, email };

    fetch(`http://localhost:5000/users/${usersLoader._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("User updated successfully");
        }
      });
  };

  return (
    <div>
      {<h3>Updated information of {usersLoader.name}</h3>}
      <form action="" onSubmit={handleUpdateUser}>
        <input type="text" name="name" defaultValue={usersLoader.name} />
        <br /> <br />
        <input
          type="email"
          name="email"
          id=""
          defaultValue={usersLoader.email}
        />
        <br /> <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
