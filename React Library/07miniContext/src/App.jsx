import { useState } from "react";
import "./App.css";
import Login from "./component/Login";
import UserContextProvider from "../context/UserContextProvider";
import Profile from "./component/Profile";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
