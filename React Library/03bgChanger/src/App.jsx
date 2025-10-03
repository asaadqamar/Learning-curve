import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap flex-row items-end justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="bg-amber-50 w-fit rounded-md p-3 mb-3 h-fit ">
          <button
            className="p-3 text-white shadow-2xl rounded-md m-2 cursor-pointer"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="p-3 text-white shadow-2xl rounded-md m-2 cursor-pointer"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="p-3 text-white shadow-2xl rounded-md m-2 cursor-pointer"
            style={{ backgroundColor: "pink " }}
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="p-3 text-black shadow-2xl rounded-md m-2 cursor-pointer"
            style={{ backgroundColor: "grey " }}
            onClick={() => setColor("olive")}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
