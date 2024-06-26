import "./styles.css";
import { useState } from "react";

export default function App() {
    const [newItem, setNewItem]= useState("")
    const [todos, setTodos] = useState([])

    const handleSubmit = e => {
        e.preventDefault()

        setTodos(currentTodos => { 
            return [
                ...currentTodos, 
                {
                    id: crypto.randomUUID(), title: newItem, completed: False
                },
            ]
        })
    }
    return (
        <>
            <form className="new-item-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="item">New Item</label>
                    <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
                </div>
                <button className="btn">Add</button>
            </form>
            <h1 className="header">Todo List</h1>
            <ul className="list">
                <li>
                    <label>
                        <input type="checkbox" />
                        Item 1
                    </label>
                    <button className="btn btn-danger">Delete</button>
                </li>
            </ul>
        </>
    )
}