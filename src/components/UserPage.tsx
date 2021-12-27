import React, {FC, useEffect, useState} from 'react';
import {Todos, Users} from "../type/type";
import axios from "axios";
import Userlist from "./userlist";
import {useNavigate} from 'react-router-dom';
const UserPage: FC = () => {
    const [users, setUsers] = useState<Users[]>([]);
    const navigate = useNavigate();

    useEffect(() =>{
        fetchUsers();
    }, []);

    async function fetchUsers(){
        try {
            const response = await axios.get<Users[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        }catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
            <Userlist onClick={(user) => navigate(`/users/${user.id}`)} users={users}/>
        </div>
    );
};

export default UserPage;