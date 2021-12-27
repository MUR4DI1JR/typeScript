import React, {FC} from 'react';
import {Todos} from "../type/type";
import List from "./list";

interface TodoProps {
    todos: Todos[]
}

const TodoList: FC<TodoProps> = ({todos}) => {
    return (
        <div>
            <List item={todos} renderitem={(todo: Todos) =>{
                return(
                    <div key={todo.id} style={{padding: 15, border: '1px solid green'}}>
                        <p>{todo.id}) {todo.title}</p>
                        <input type="checkbox" checked={todo.completed}/>
                    </div>
                )
            }}/>
        </div>
    );
};

export default TodoList;