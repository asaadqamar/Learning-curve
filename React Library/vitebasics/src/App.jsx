import { useState } from "react";
import Youtube from "./Youtube";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>hello</h1>
      <Youtube />
    </>
  );
}

export default App;
