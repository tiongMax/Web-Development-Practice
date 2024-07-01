import TodoList from "./TodoList";
import NewTodoForm from "./Form";
import "./styles.css";
import { useState } from "react";

export default function App() {
    const [todos, setTodos] = useState([]);

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
            if (t.id == id) {
                return { ...t, completed}
            }
        }))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(t => t.id !== id))
    }

    return (
        <>
            <NewTodoForm addTodo={addTodo} />
            <h1 className="header">Todo List</h1>
            <TodoList todos={todos} />
        </>
    );
}
