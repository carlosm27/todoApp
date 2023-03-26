import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const url = "http://localhost:3000/todo_tasks";

export default function TaskList() {

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


    return (
        <>
          <ul>
            {todos.map(task => (
              <li key={task.id}>{task.task}{' '}{String(task.completed)}
              </li>
            ))}
          </ul>
        </>
      );

}