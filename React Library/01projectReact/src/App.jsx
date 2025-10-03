import { useState } from "react";
import "./App.css";

function App() {
  const [cart, updateCart] = useState(0);
  const addValue = () => {
    updateCart(cart + 1);
  };
  const removeValue = () => {
    if (cart <= 0) return;
    updateCart(cart - 1);
  };
  return (
    <>
      <h1>Add to Cart System</h1>
      <h2>Cart Product:{cart}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      <p>Footer</p>
    </>
  );
}

export default App;
