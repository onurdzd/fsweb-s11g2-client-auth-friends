import axios from 'axios';
import React from 'react';

const LoginForm = ({users,setUsers}) => {

axios.post("/api/login", 
    { username: 'workintech', 
    password: 'wecandoit' }).then(res=>console.log(res))

    axios.get("/api/friends", 
    ).then(res=>console.log(res))

    return (
        <div>
        <div className='loginFormMainDiv'>
            <h1>LOGIN</h1>
            <form>
            <div>   
            <h2>USERNAME</h2>
            <input></input>
            </div> 
            <div>
            <h2>PASSWORD</h2>
            <input></input>
            </div> 
            <button>SUBMIT</button>
            </form>
        </div>
        </div>
    );
};

export default LoginForm;