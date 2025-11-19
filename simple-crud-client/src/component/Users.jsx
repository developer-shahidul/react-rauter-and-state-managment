import React from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const user = useLoaderData();

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
        }
      });
  };

  return (
    <div>
      <h2>{user.length}</h2>
      <div>
        {user.map((q, index) => (
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
