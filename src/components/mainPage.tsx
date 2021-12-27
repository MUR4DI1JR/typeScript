import React from 'react';
import EventsExample from "./EventsExample";

const MainPage = () => {
    return (
        <div>
            <a href="/users">users</a>
            <a href="/todos">todos</a>
            <EventsExample/>
        </div>
    );
};

export default MainPage;