import { useState, useEffect, useRef } from "react";
import DigitalClock from "./DigitalClock";
import Stopwatch from "./StopWatch";

function ToDo({ darkMode, setDarkMode }) {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [newTask, setNewTasks] = useState("");

   const musics = [
  {name: "Lo-fi",file:"./music/massobeats.mp3"},
  {name: "Rain",file:"./music/Bon Iver - Beach Baby .mp3"},
  {name: "Piano",file:"./music/Describe what she was like.mp3"},
]

  const [ currentMusic , setCurrentMusic] = useState(musics[0].file);

  // const [selectedTask, setSelectedTask] = useState(null);

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks]);


  function handleInputChange(event) {
    setNewTasks(event.target.value);
  }

  function addTask() {
    if (newTask.trim() === "") return;

    setTasks((t) => [
      ...t,
      { id: Date.now(), text: newTask, completed: false, focus: false, time:0 },
    ]);
    setNewTasks("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      addTask();
    }
  }

  function toggleTaskCompletion(index) {
    const updatedTask = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task,
    );
    setTasks(updatedTask);
  }

  function toggleFocusMode(index) {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, focus: !task.focus } : task,
      ),
    );
  }

  function deleteSelectedTasks() {
    const updatedTasks = tasks.filter((task) => !task.completed);
    setTasks(updatedTasks);
  }

  function updatedTaskTime(index,time) {
    setTasks(tasks.map((task,i) =>
      i === index ? {...task, time:time} : task
    ));
  }


  return (
    <div className={`todo-card ${darkMode ? "dark" : ""}`}>
      <div
        className="todo-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Todo List</h1>

        <button onClick={() => setDarkMode(!darkMode)}>
          {" "}
          {darkMode ? "Light" : "Dark"}{" "}
        </button>
      </div>
      <DigitalClock />
      <p className="task-num">Total Tasks: {tasks.length}</p>
      <div className="todo-input">
        <input
          type="text"
          ref={inputRef}
          value={newTask}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          placeholder="Enter the task ........."
        />

        <button onClick={addTask}>Add</button>
      </div>

      <div className="task-list">
        {tasks.map((task, index) => (
           <div key={task.id}>
          <li className="task">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)} />
            <span
              // react inline style
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                marginLeft: "8px",
                cursor: "pointer",
              }}
              onClick={() => toggleFocusMode(index)}>
              {task.text}
            </span>
              </li>
              <div className="focus-mode-card" style={{display: task.focus ? "block" : "none"}}>
                <h3>Focus Mode :"{task.text}"</h3>
                <div className="audio-player">
                  <span>Music</span>
                  <select onChange={(e) => setCurrentMusic(e.target.value)}>
                    {musics.map((m,i) =>
                      (<option key={i} value={m.file}>{m.name}</option>
                         ))}
                      </select>
                  <audio controls src= {currentMusic}>
                    Music Bajena Jasto xa!
                  </audio>
                </div>
                <Stopwatch
                  savedTime = {task.time}
                  updateTime = {(t) => updatedTaskTime(index,t)}
                />
              </div>
           
            </div>
        ))}
      </div>
      {tasks.some((task) => task.completed) && (
        <button onClick={deleteSelectedTasks}>Delete</button>
      )}
    </div>
  );
}

export default ToDo;
