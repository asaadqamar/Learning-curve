import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen bg-gray-800 flex justify-center align-middle items-center">
        <div className="bg-white h-fit p-5 rounded-md">
          <h1 className="text-3xl font-bold text-center">Password Genrator</h1>
          <div className="flex p-5">
            <input
              className="border border-gray-500 p-2 w-90 focus:outline-none rounded-l-md"
              type="text"
              name="password"
              id="password"
              readOnly
            />
            <button
              className="bg-blue-800 text-white p-2 rounded-r-md cursor-pointer"
              type="button"
            >
              Copy
            </button>
          </div>
          <div className="flex gap-5">
            <div className="flex">
              <label className="p-2" htmlFor="range">
                Length
              </label>
              <input type="range" name="range" id="range" min="8" max="20" />
            </div>
            <div className="flex">
              <label className="p-2" htmlFor="number">
                Number
              </label>
              <input type="checkbox" name="number" id="number" />
            </div>
            <div className="flex">
              <label className="p-2" htmlFor="char">
                Special Charater
              </label>
              <input type="checkbox" name="char" id="char" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
