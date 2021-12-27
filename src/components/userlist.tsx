import React, {FC} from 'react';
import {Users} from "../type/type";
import {useNavigate} from "react-router-dom";
import List from "./list";

interface UserListProps {
    users: Users[];
    onClick: (user: Users) => void;
}

const Userlist: FC<UserListProps> = ({users, onClick}) => {
    const navigate = useNavigate();

    return (
        <div>
            <List
                item={users}
                renderitem={(user: Users) =>{
                    return(
                        <div key={user.id} style={{padding: 15, border: '1px solid green'}} onClick={()=> navigate(`/users/${user.id}`)}>
                            <p>{user.id}) {user.name}, {user.address.city}, {user.address.street}</p>
                        </div>
                    )
                }}
            />
        </div>
    );
};

export default Userlist;