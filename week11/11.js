import React, { useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0);

    const onIncrease = () => { setNumber((prevNumber) => prevNumber + 1) };
    const onDecrease = () => { setNumber((prevNumber) => prevNumber - 1) };

    return (
    <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
    </div>
    );
}
export default Counter;


/*

import { useReducer, useState } from 'react';

const initialState = [];

function reducer(state, action) {
    switch (action.type) {
    case 'add':
        return [...state, { id: Date.now(), text: action.text }];
    case 'remove':
        return state.filter(todo => todo.id !== action.id);
    default:
        throw new Error();
    }
}

function TodoApp() {
    const [todos, dispatch] = useReducer(reducer, initialState);
    const [text, setText] = useState('');

    return (
    <div>
        <h1>Todo App</h1>
        <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => {
        dispatch({ type: 'add', text });
        setText('');
        }}>Add Todo</button>
        <ul>
        {todos.map(todo => (
            <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch({ type: 'remove', id: todo.id })}>
                Remove
            </button>
            </li>
        ))}
        </ul>
    </div>
    );
}

export default TodoApp;

*/