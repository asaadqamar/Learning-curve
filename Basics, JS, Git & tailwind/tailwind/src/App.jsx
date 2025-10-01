import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <body data-theme="dark">
      <div>
        <form action="POST" method="post">
          <input
            type="text"
            name="name"
            id="name"
            className="placeholder-white inline"
            placeholder="name"
          />
          <input type="email" name="email" id="email" />
          <input type="password" name="password" id="password" />
          <input className="bg-white text-white" type="submit" value="Submit" />
        </form>
        <p className="text-9xl"> Tail One</p>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </body>
  );
}

export default App;
