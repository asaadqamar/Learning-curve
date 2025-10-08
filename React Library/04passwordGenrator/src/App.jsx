import { useState } from "react";
import { useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [Length, isLength] = useState(8);
  const [char, isChar] = useState(false);
  const [number, isNumber] = useState(false);
  const [password, crntPassword] = useState("");

  const genratePass = useCallback(() => {
    let pass = "";
    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (char) string += "!@#$%^&*()_+";
    if (number) string += "0123456789";

    for (let i = 1; i < Length; i++) {
      const randomNumber = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(randomNumber);
    }

    crntPassword(pass);
  }, [Length, char, number]);

  useEffect(() => {
    genratePass();
  }, [Length, char, number]);

  const passRef = useRef(null);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passRef.current.select();
  };

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
              value={password}
              ref={passRef}
              readOnly
            />
            <button
              className="bg-blue-800 text-white p-2 rounded-r-md cursor-pointer"
              onClick={copyPassword}
              type="button"
            >
              Copy
            </button>
          </div>
          <div className="flex gap-5">
            <div className="flex">
              <label className="p-2" htmlFor="range">
                Length: {Length}
              </label>
              <input
                type="range"
                min="8"
                max="20"
                value={Length}
                onChange={(e) => isLength(e.target.value)}
                name="range"
                id="range"
              />
            </div>
            <div className="flex">
              <label className="p-2" htmlFor="number">
                Number
              </label>
              <input
                type="checkbox"
                defaultChecked={number}
                onChange={() => {
                  isNumber((prev) => !prev);
                }}
                name="number"
                id="number"
              />
            </div>
            <div className="flex">
              <label className="p-2" htmlFor="char">
                Special Charater
              </label>
              <input
                type="checkbox"
                defaultChecked={char}
                onChange={() => {
                  isChar((last) => !last);
                }}
                name="char"
                id="char"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
