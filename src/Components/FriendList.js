import React from 'react';

const FriendList = ({users}) => {
    return (
        <div className='friendListDiv'>
           <h1>FRIENDS LIST</h1> 
           {users.map((user,key)=>(
            <div key={key}>-{user.name}-{user.email}</div>
           ))}
        </div>
    );
};

export default FriendList;