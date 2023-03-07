import {
  Route
} from "react-router-dom";
import './App.css';
import LoginForm from './Components/LoginForm';
import Header from "./Components/Header";
import { useState } from "react";
import FriendList from "./Components/FriendList";

function App() {
  const [users,setUsers]=useState([{
    id: 1,
    name: 'Joe',
    age: 24,
    email: 'joe@schoolintech.com',
  }])

  return (
    <div className="App">
      <Route exact path="/">
      <Header></Header>
      <h1>Client Auth Projesi: Friends</h1>
      </Route>
      <Route path="/login">
      <Header></Header>
      <LoginForm users={users} setUsers={setUsers}></LoginForm>
      </Route>
      <Route path="/friendList">
      <Header></Header>
      <FriendList users={users}></FriendList>
      </Route>
    </div>
  );
}

export default App;
