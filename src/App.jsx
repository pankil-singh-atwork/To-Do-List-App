import "./styles.css";
import { useState } from "react";

function App() {
  // state to store the tasks

  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // add new tasks
  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };
  const removeItem = (index) => {
    const newTaks = tasks.filter((task , i) => i != index);
    // passed the updated task array to render 
    setTasks(newTaks);

  }

  console.log(tasks);
  return (
    <div className="App">
      <h1>To-DO List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a Task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              {task}
              <button onClick={() => removeItem(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
