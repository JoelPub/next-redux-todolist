"use client";
import { addTodo } from "@/redux/features/todo-slice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
function TodoList() {
  const todoList = useSelector((state) =>
    state.todoReducer ? state.todoReducer.list : [],
  );
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const handleSubmit = () => {
    dispatch(addTodo(todo));
  };
  return (
    <div>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={handleSubmit}>add</button>
      {todoList.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
}
export default TodoList;
