npx creae-next-app@latest
# next-redux-todolist
redux toolkit todolist with nextjs
- add redux toolkit
 command: npm install @reduxjs/toolkit react-redux
- create a store
 create a folder named store in the root directory, and create a file named index.js in the store folder
 add the following code to index.js
 ```javascript
 import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {},
});

export default store;
    ```
- create slices for todolist
 create a folder named features in the root directory, and create a folder named todolist in the features folder
 create a file named todolistSlice.js in the todolist folder
 add the following code to todolistSlice.js
 ```javascript
 import {createSlice} from '@reduxjs/toolkit';

const todolistSlice = createSlice({
    name: 'todolist',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        removeTask: (state, action) => {
            return state.filter(task => task.id !== action.payload.id);
        },
    },
});

export const {addTask, removeTask} = todolistSlice.actions;
export default todolistSlice.reducer;
    ```
    - integrate the todolist slice into the store
    import the todolist reducer in store/index.js and add it to the configureStore
    ```javascript
    import {configureStore} from '@reduxjs/toolkit';
    import todolistReducer from '../features/todolist/todolistSlice';

    const store = configureStore({
        reducer: {
            todolist: todolistReducer,
        },
    });

    export default store;
    ```
- provide the store to the app
 wrap the _app.js with the Provider from react-redux and pass the store as a prop
 ```javascript
 import '../styles/globals.css';
 import {Provider} from 'react-redux';
 import store from '../store';

 function MyApp({Component, pageProps}) {
     return (
         <Provider store={store}>
             <Component {...pageProps} />
         </Provider>
     );
 }

 export default MyApp;
 ```
- create todolist components    
 create a folder named components in the root directory
 create a file named TodoList.js in the components folder
 add the following code to TodoList.js
 ```javascript
 import React, {useState} from 'react';
 import {useSelector, useDispatch} from 'react-redux';
 import {addTask, removeTask} from '../features/todolist/todolistSlice';

 function TodoList() {
     const [task, setTask] = useState('');
     const todolist = useSelector(state => state.todolist);
     const dispatch = useDispatch();

     const handleAddTask = () => {
         if (task.trim()) {
             dispatch(addTask({id: Date.now(), text: task}));
             setTask('');
         }
     };

     const handleRemoveTask = (task) => {
         dispatch(removeTask(task));
     };

     return (
         <div>
             <h1>Todo List</h1>
             <input
                 type="text"
                 value={task}
                 onChange={(e) => setTask(e.target.value)}
             />
             <button onClick={handleAddTask}>Add Task</button>
             <ul>
                 {todolist.map((task) => (
                     <li key={task.id}>
                         {task.text}
                         <button onClick={() => handleRemoveTask(task)}>Remove</button>
                     </li>
                 ))}
             </ul>
         </div>
     );
 }

 export default TodoList;
 ```
 - use the TodoList component in the index.js
 ```javascript
 import Head from 'next/head';
 import TodoList from '../components/TodoList'; 

 export default function Home() {
     return (
         <div>
             <Head>
                 <title>Todo List</title>
                 <meta name="description" content="A simple todo list app" />
             </Head>
             <main>
                 <TodoList />
             </main>
         </div>
     );
 }
 ```
- run the project