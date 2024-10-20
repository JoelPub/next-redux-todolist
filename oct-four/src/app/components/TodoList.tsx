'use client';

import { RootState, AppDispatch } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { addTodo,removeTodo,toggleTodo } from "@/redux/todo-slice";
import React, {useState} from 'react'

function TodoList() {
    const listOfTodo = useSelector((state:RootState)=>state.todoReducer.list);
    const dispatch = useDispatch<AppDispatch>();
    const [item, setItem] = useState("");
    const handleSubmit = () => {
        dispatch(
            addTodo({
                id:Date.now(),
                name:item,
                done:false,
            })
        )
        setItem("");
    }
    const handleRemove = (id:number) =>{
        dispatch(removeTodo(id));
    }
    const handleToggle = (id:number) => {
        dispatch(toggleTodo(id));
    }
    return (
        <div>
            <input type="text" onChange={(e)=>setItem(e.target.value)} value={item} />
            <button onClick={handleSubmit}>Add</button>
            {
                listOfTodo.map((item)=>{
                    return  (
                        <div key={item.id} >
                            <input 
                            type="checkbox" 
                            checked={item.done} 
                            onChange={()=>handleToggle(item.id)}
                            />
                            {item.name}
                            <button onClick={()=>handleRemove(item.id)}>🗑️</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default TodoList;
