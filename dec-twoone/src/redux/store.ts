import { configureStore, Store } from "@reduxjs/toolkit";
import todoReducer from './feature/todo-slice'
const store = configureStore({
    reducer: {
        todoReducer
    }
});
export {store};
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
