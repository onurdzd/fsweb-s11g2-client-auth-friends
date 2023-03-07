import React from "react";
import { useHistory } from "react-router-dom";


const Header = () => {
  const history = useHistory();

  const logOut = () => {
    history.push("/");
    // axiosWithAuth().post('http://localhost:9000/api/logout').then(res=>{
    //    console.log(res)
    // })
    localStorage.removeItem("token");
  };

  return (
    <div>
      <div className="loginFormHeaderDiv">
        <div>
          <h1>FRIENDS DATABASE</h1>
        </div>
        <div className="loginFormHeaderButtonDiv">
          {!localStorage.getItem("token") && (
            <button onClick={() => history.push("/login")}>LOGIN.</button>
          )}
          <button onClick={() => history.push("/friends/")}>
            FRIENDLIST.
          </button>
          <button onClick={() => history.push("/friends/add")}>ADDFRIEND.</button>
          {localStorage.getItem("token") && (
            <button onClick={logOut}>LOGOUT</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
