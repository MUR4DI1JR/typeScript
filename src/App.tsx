import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import EventsExample from "./components/EventsExample";
import { BrowserRouter as Router, useRoutes} from "react-router-dom";
import UserPage from "./components/UserPage";
import TodoPage from "./components/todoPage";
import MainPage from "./components/mainPage";
import UserItemPage from "./components/UserItemPage";


const App = () =>{
    const routes = useRoutes([
        {path: '/', element: <MainPage/>},
        {path: '/users', element: <UserPage/>},
        {path: '/users/:id', element: <UserItemPage/>},
        {path: '/todos', element: <TodoPage/>},
    ])
    return (
        routes
    );
};

const AppWrapper = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

export default AppWrapper;
