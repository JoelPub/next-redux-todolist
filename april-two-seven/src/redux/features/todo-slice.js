import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [],
};
export const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
  },
});
export const { addTodo } = todo.actions;
export default todo.reducer;
