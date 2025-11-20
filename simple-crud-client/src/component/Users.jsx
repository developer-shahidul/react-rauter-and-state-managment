import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadUsers = useLoaderData();
  const [users, setUser] = useState(loadUsers);
  const handleDeletUser = (_id) => {
    console.log("delet", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("delete successfully");
          const remaining = users.filter((user) => user._id !== _id);
          setUser(remaining);
        }
      });
  };

  return (
    <div>
      <h2>{users.length}</h2>
      <div>
        {users.map((q, index) => (
          <p key={`${q._id}-${index}`}>
            {q.name} : {q.email}
            <button onClick={() => handleDeletUser(q._id)}>x</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
