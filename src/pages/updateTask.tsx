import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';



export const Update = () => {
    const [todo, setTodo] = useState({
        task: "",
        completed: "",
    });
    
    let params = useParams();
    let id = params.id;
    const {task, completed} = todo;
    const url = `http://localhost:3000/todo_tasks/${id}`;
    let navigate =  useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const options =  {

            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(todo),
            
        };

        const response = await fetch(url, options)
    
        const result = await response.json()
        alert(`This is the Task: ${task} with the Status :${completed}`) 
        console.log(result)

        setTodo({
            task: "",
            completed: "",
        });
        navigate("/")
           
            
    };

    return (
        <>
        <div className="app">
            <div className="add-post-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="url">Task: </label>
                    <input type="text" className="form-control" value={task}
                        onChange={(e) => setTodo({...todo, task: e.target.value})}
                    />
                    <label htmlFor="url">Completed: </label>
                    <input type="text" className="form-control" id=""  
                        value={completed} onChange={(e) => setTodo({...todo, completed: e.target.value})} 
                    />
                    
                    <button type="submit" >Update Task</button>
                    
                </form>
                <button onClick={() => navigate("/")}>Cancel</button>
            </div>
        </div>
        </>
        
    );
};  
  


