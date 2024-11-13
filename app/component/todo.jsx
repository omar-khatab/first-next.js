"use client"
// in the sentence above to turn the server component to client component
// here in this page we can't enter the routing of next js as we don't make page.js
// here in this page we make client component to deal with hooks as client component is a default
import { useEffect, useState } from "react";
export default function Todo () {
    const [todo, setTodo] = useState({})
    // here this don't work in the client component (normal react) must make side effect from the useEffect or event handler 
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // const todo = await response.json()
    useEffect (async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const result = await response.json();
        setTodo(result)
    }, [])
    return (
        <div>
            <h1>{todo.title}</h1>
        </div>
    )
}