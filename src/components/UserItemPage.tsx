import React, {FC, useEffect, useState} from 'react';
import {Users} from "../type/type";
import axios from "axios";
import {useParams} from "react-router-dom";

interface UserItemPageProps {
    id?: string;
}

const UserItemPage: FC = () => {
    const [user, setUser] = useState<Users | null>(null)
    const params = useParams();

    useEffect(() =>{
        fetchUser();
    }, []);

    async function fetchUser(){
        try {
            const response = await axios.get<Users>(`https://jsonplaceholder.typicode.com/users/${params.id}`);
            setUser(response.data);
        }catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <p>{user?.name}</p>
        </div>
    );
};

export default UserItemPage;