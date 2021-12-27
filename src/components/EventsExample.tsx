import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) =>{
        console.log(inputRef.current?.value);
    }

    return (
        <div>
            <input type="text" value={value} onChange={changeHandler}/>
            <input ref={inputRef} onChange={changeHandler}/>
            <button onClick={clickHandler}>click me</button>
        </div>
    );
};

export default EventsExample;