import { useState } from "react"
import TodoItem from "./TodoItem";

const Todo = () => {
    const [todo , setTodo] = useState({ name: "" , done: false});
    const [todos , setTodos] = useState([]);
    
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos , todo]);
        setTodo({name: "", done: false});
    }
    return (
        <div className="container mt-3">
            <h2>Add Todo</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-3">
                    <label htmlFor="task">Add Task</label>
                    <input 
                    type="text"
                    className="form-control"
                    id="task"
                    required
                    value={todo.name}
                    onChange={(e) => 
                        setTodo({ ...todo, name: e.target.value })
                    }
                    />
                </div> 
                <button type="submit" className="btn btn-primary">
                    Add Task 
                </button>
            </form>
            <ul className="list-group pt-3">
                <TodoItem todoItem = {todos} setTodos = {setTodos}/>
            </ul>
        </div>
    );
};

export default Todo;