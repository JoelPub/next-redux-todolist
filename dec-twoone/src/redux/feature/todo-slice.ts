import { createSlice } from "@reduxjs/toolkit";

interface Todo {
    id: number;
    name: string;
    completed: boolean;
} 
type TodoList  = {
    todoList: Todo[];
}
const initialState: TodoList = {
    todoList: [
        {
            id: 1,
            name: 'a',
            completed: true
        }
    ]
}
const todoReducer = createSlice({
    name: 'todoReducer',
    initialState: initialState,
    reducers: {
        addTodo : (state, action) => {state.todoList.push(action.payload)},
        removeTodo: (state, action) => {state.todoList.filter((todo)=>todo.id !== action.payload)},
        toggleTodo: (state, action) => {
            const item = state.todoList.find((todo)=>
            todo.id===action.payload.id);
            if(item) {
                item.completed = !item.completed;
            }
        }
    }
});

export {todoReducer}
export const {addTodo, removeTodo, toggleTodo} = todoReducer.actions
export default todoReducer.reducer;
