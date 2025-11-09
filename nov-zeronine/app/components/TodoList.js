'use client';
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo,removeTodo } from "../../features/todolist/todolistSlice";

const TodoList = () => {
    const [inputValue, setInputValue] = useState("");
    const todos = useSelector((state) => state.todolist.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (inputValue.trim() !== "") {
            const newTodo = {
                id: Date.now(),
                text: inputValue,
            };
            dispatch(addTodo(newTodo));
            setInputValue("");
        }
    };

    const handleDeleteTodo = (id) => {
        dispatch(removeTodo(id));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default TodoList;