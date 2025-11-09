import {createSlice} from '@reduxjs/toolkit';
const todolistSlice = createSlice({
    name: 'todolist',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})
export const {addTodo, removeTodo} = todolistSlice.actions;
export default todolistSlice.reducer;
