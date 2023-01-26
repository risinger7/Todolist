import { useState } from "react";

function App() {
    const [todos, setTodos] = useState([]);
    
    return (
        <div>
            <h1 className="text-3xl underline">Todo App</h1>
            <form className="flex mx-auto w-60">
                <input className="bg-green-100" type="text" />
                <button className="bg-green-400">Add todo</button>
            </form>
        </div>
    );
}

export default App;
