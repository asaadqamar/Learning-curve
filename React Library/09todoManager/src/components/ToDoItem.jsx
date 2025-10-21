import React, { useState } from "react";
import { useTodo } from "../context";

function ToDoItem({ todo }) {
  const [isToDoEditable, setisToDoEditable] = useState(false);
  const [ToDoMsg, setToDoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleTodo } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: ToDoMsg });
    setisToDoEditable(false);
  };

  const toggledTodo = () => {
    toggleTodo(todo.id);
  };
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursur-pointer"
        checked={todo.completed}
        onChange={toggledTodo}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isToDoEditable ? "border-black/10 px-2" : "border-transparent"
        }`}
        value={ToDoMsg}
        onChange={(e) => {
          setToDoMsg(e.target.value);
        }}
        readOnly={!isToDoEditable}
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;
          if (isToDoEditable) {
            editTodo();
          } else {
            setisToDoEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
      >
        {isToDoEditable ? "📁" : "✏️"}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        ❌
      </button>
    </div>
  );
}

export default ToDoItem;
