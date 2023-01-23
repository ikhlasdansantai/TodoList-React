import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { task: newTask, completed: false }]);
    setNewTask("");
  };

  const handleDelete = (index) => {
    const updatedTask = [...tasks];
    updatedTask.splice(index, 1);
    setTasks(updatedTask);
  };

  const handleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <header className="App-header  p-standart sm:min-w-[20rem] mx-auto">
        <h2 className="text-3xl mb-10 font-semibold">TodoList Dengan ReactJS</h2>
        <form onSubmit={handleSubmit} className="flex justify-center ">
          <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} className="text-black py-4 px-1 min-[350px]:px-4" />
          <button className="border-l border-purple-700 bg-slate-500 text-slate-100 px-4  font-semibold tracking-wide">Submit</button>
        </form>
        {tasks.map((task, index) => {
          return (
            <div key={index} className="container mt-10 flex justify-start items-center bg-white shadow-md px-4 rounded-lg  relative">
              <input type="checkbox" checked={task.completed} onChange={() => handleComplete(index)} className="absolute left-[.5rem] top-0 bottom-0 w-[2rem] cursor-pointer" />
              <h2
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
                className="text-black pl-10 py-4 text-2xl"
              >
                {task.task}
              </h2>
              <button onClick={() => handleDelete(index)} className="border bg-red-700 text-slate-300 px-4 rounded-sm absolute right-0 top-0 bottom-0">
                Hapus
              </button>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
