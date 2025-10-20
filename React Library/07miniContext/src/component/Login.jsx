import React, { useContext } from "react";
import { useState } from "react";
import UserContext from "../../context/UserContext";
import UserContextProvider from "../../context/UserContextProvider";

function Login() {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");

  const { setuser } = useContext(UserContext);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setuser({ username, password });
    console.log(username);
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Jhon"
        value={username}
        onChange={(e) => SetUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="******"
        value={password}
        onChange={(e) => SetPassword(e.target.value)}
      />
      <button onClick={handleSubmitForm}>Submit</button>
    </div>
  );
}

export default Login;
