import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
        {todos.length === 0 && "No todos"}
        {todos.map(t => <TodoItem {...t} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />)}
    </ul>
    )
}