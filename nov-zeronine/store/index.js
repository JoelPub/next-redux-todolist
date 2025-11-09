import {configureStore} from '@reduxjs/toolkit';
import todolistReducer from '../features/todolist/todolistSlice';

const store = configureStore({
    reducer: {
        todolist: todolistReducer,
    },
});

export default store;
