import React, { useState } from "react";


const AddFriend = ({ friends, setFriends }) => {
  const [addingUser, setAddingUser] = useState({});

  const handleChangeAdd = (e) => {
    setAddingUser({
      ...addingUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    setFriends([...friends, addingUser]);
  };
 

  return (
    <div>
      <div className="loginFormMainDiv">
        <h1>ADD FRIEND</h1>
        <form onSubmit={handleSubmitAdd}>
          <div>
            <h2>FRIEND NAME</h2>
            <input name="name" onChange={handleChangeAdd}></input>
          </div>
          <div>
            <h2>FRIEND EMAIL</h2>
            <input name="email" onChange={handleChangeAdd}></input>
          </div>
          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default AddFriend;
