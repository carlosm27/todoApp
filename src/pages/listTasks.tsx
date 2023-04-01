import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router';
import { DeleteTask } from '../components/RemoveTask'

const url = "http://localhost:3000/todo_tasks";
export default function GetTasks() {

    const[todos, setTodos] = useState<any[]>([]);


    useEffect(() => {
        getTasks()
    }, [])

    let getTasks =  async () => {
        let response = await fetch(`${url}`)
        let data =  await response.json()
        setTodos(data)
        console.log(data)
    }

    let navigate = useNavigate();

    let handleClick = () => {
        navigate("/create")
    }

    let DeleteTask =  ( id:String) => {


      const url = `http://localhost:3000/todo_tasks/${id}`;
  
    
      fetch(url, {method:'DELETE'}).then( () => getTasks())
      console.log(id)
      navigate("/")
  
    }

    return (
        <>
          <h1>Task List:</h1>
          <button onClick={handleClick}>Add Task</button>
          <table>
            <tr>
              <th>Task</th>
              <th>Completed</th>
              <th>Actions</th>
            </tr>
            
           
            {todos.map(task => (
              <tr key={task.id}>
                <td>{task.task}</td>    
                <th>{String(task.completed)}</th>
                <td><button onClick={() => navigate(`update/${task.id}`)}>Update</button></td>
                <td><button onClick={()=> DeleteTask(task.id)}>Delete</button></td>  
              </tr>
              
            ))}
            
          </table>
        </>
      );

}