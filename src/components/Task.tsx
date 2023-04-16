import React, { useState, useEffect, ChangeEvent } from "react";

const url = "http://localhost:3000/todo_tasks";

interface Task {
  id: number;
  task: string;
  completed: boolean;
} 

const AppTask: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [task, setTask] = useState("");

    useEffect(() => {
        fetchtasks();
    }, []);

    const fetchtasks =  async () => {
        
        const response = await fetch(`${url}`)
        setTasks( await response.json());

    };

    const handleAddTask = async () => {
        const newTask = { task, completed: false};
        const options =  {

            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(newTask),
            
        };
        const response = await fetch(url, options)
        const data = await response.json();
        setTasks([...tasks, data]);
        setTask("");
    };

    const handleToggleCompleted = async (id: number) => {
        const taskToToggle = tasks.find((task) => task.id === id);
        const updatedTask = { ...taskToToggle, completed: !taskToToggle.completed };
        const options =  {

            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(updatedTask),
            
        };
        const response = await fetch(`${url}/${id}`, options)
        const data = await response.json();
        const updatedTasks = tasks.map(task =>
            task.id === id ? data : task
          );
          setTasks(updatedTasks);
    };

    const handleDeleteTask = async (id: number) => {
        fetch(`${url}/${id}`, {method:'DELETE'}).then( () => fetchtasks())
    };



    return (
        <div>
          <h1>Tasks</h1>
          <h2>Add Task</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={() => handleAddTask()}>Add</button>
          </form>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                  onClick={() => handleToggleCompleted(task.id)}
                >
                  {task.task}
                </span>
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </li>
            ))}
          </ul>
          
          
        </div>
      );
};

export default AppTask;