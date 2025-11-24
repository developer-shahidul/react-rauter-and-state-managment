//

// import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const usersLoader = useLoaderData();
  console.log(usersLoader);
  // const [user, setUser] = useState(usersLoader);

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
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
