import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";
import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("ITEMS")
        if (localValue == null) return [] 

        return JSON.parse(localValue)
    });

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos))
    }, [todos])

    const addTodo = (title) => {
        setTodos(currentTodos => {
            return [
                ...currentTodos,
                { id: crypto.randomUUID(), title, completed: false },
            ];
        });
    }

    const toggleTodo = (id, completed) => {
        setTodos(todos.map(t => {
            if (t.id === id) {
                return { ...t, completed}
            }
            return t
        }))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(t => t.id !== id))
    }

    return (
        <>
            <NewTodoForm addTodo={addTodo} />
            <h1 className="header">Todo List</h1>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </>
    );
}
