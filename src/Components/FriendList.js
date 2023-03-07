import React, { useEffect } from "react";
import { axiosWithAuth } from "../axiosWithAuth";

const FriendList = ({ friends, setFriends }) => {
    const friendData = () => {
        axiosWithAuth()
          .get("http://localhost:9000/api/friends")
          .then((res) => {
            friends.length===0 && setFriends(res.data);
          });
      };
    
      useEffect(() => {
        friendData();
      }, []);

  return (
    <div className="friendListDiv">
      <h1>FRIENDS LIST</h1>
      {friends.map((friend, key) => (
        <div className="friendList" key={key}>
          -{friend.name}-{friend.email}
        </div>
      ))}
    </div>
  );
};

export default FriendList;
