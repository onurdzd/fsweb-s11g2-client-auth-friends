import { Route } from "react-router-dom";
import "./App.css";
import LoginForm from "./Components/LoginForm";
import Header from "./Components/Header";
import FriendList from "./Components/FriendList";
import AddFriend from "./Components/AddFriend";
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  const [friends, setFriends] = useState([]);

  return (
    <div className="App">
      <Route exact path="/">
        <Header></Header>
        <h1>Client Auth Projesi: Friends</h1>
      </Route>
      <Route path="/login">
        <Header></Header>
        <LoginForm></LoginForm>
      </Route>
      <Route exact path="/friends">
        <Header></Header>
        <FriendList friends={friends} setFriends={setFriends}></FriendList>
      </Route>
      <Route exact path="/friends/add">
        <Header></Header>
        <AddFriend friends={friends} setFriends={setFriends}></AddFriend>
      </Route>
      {/* <PrivateRoute path='/friendList' component={FriendList}></PrivateRoute> */}
    </div>
  );
}

export default App;
