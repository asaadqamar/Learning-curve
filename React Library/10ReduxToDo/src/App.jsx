import { useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import AddToDo from "./components/AddToDo";
import ListToDo from "./components/ListToDo";

function App() {
  return (
    <Provider store={store}>
      <AddToDo />
      <ListToDo />
    </Provider>
  );
}

export default App;
