import { useEffect, useState } from "react";
import "./index.css";

function makeId() {
  // Simple ID generator (good enough for a lesson)
  return Date.now().toString() + Math.random().toString(16).slice(2);
}

export default function App() {
  // Input state
  const [text, setText] = useState("");

  // Task list state (load from localStorage once on first render)
  const [tasks, setTasks] = useState(() => {
    const raw = localStorage.getItem("tasks");
    return raw ? JSON.parse(raw) : [];
  });

  // Persist tasks whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    const trimmed = text.trim();
    if (!trimmed) return;

    const newTask = {
      id: makeId(),
      text: trimmed,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setText("");
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  function clearAll() {
    setTasks([]);
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevent page refresh
    addTask();
  }

  return (
    <div className="page">
      <h1>My To-Do List</h1>

      <form className="input-container" onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit">Add</button>
        <button type="button" className="secondary" onClick={clearAll}>
          Clear All
        </button>
      </form>

      {tasks.length === 0 ? (
        <p className="hint">No tasks yet. Add one above.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`task ${task.completed ? "completed" : ""}`}
            >
              <span className="task-text" onClick={() => toggleTask(task.id)}>
                {task.text}
              </span>
              <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

