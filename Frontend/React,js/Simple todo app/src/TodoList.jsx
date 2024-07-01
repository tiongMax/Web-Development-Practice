import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
    return (
        <ul className="list">
        {todos.length === 0 && "No todos"}
        {todos.map(t => <TodoItem id={t.id} completed={t.completed} title={t.title} key={t.id} />)}
    </ul>
    )
}