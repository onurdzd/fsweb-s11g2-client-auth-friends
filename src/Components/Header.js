import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {

    const history=useHistory()
    return (
        <div>
            <div className='loginFormHeaderDiv'>
            <div>
            <h1>FRIENDS DATABASE</h1>
            </div>
            <div className='loginFormHeaderButtonDiv'>
            <button onClick={()=> history.push("/login")}>LOGIN.</button>
            <button onClick={()=> history.push("/friendList")}>FRIENDLIST.</button>
            <button >ADDFRIEND.</button>
            <button onClick={()=> history.push("/")}>LOGOUT</button>
            </div>
        </div>
        </div>
    );
};

export default Header;