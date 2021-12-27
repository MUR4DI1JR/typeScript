import React, {useEffect, useState} from 'react';
import {Todos} from "../type/type";
import axios from "axios";
import TodoList from "./todoList";

const TodoPage = () => {
    const [todos, setTodos] = useState<Todos[]>([]);

    useEffect(() =>{
        fetchTodos();
    }, []);

    async function fetchTodos() {
        try {
            const response = await axios.get<Todos[]>('https://jsonplaceholder.typicode.com/todos');
            setTodos(response.data)
        }catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <TodoList todos={todos}/>
        </div>
    );
};

export default TodoPage;