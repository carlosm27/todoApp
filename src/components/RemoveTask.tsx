import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';



export const DeleteTask = (id: String) => {
    
    let params = useParams();
    //let id = params.id;
    const url = `http://localhost:3000/todo_tasks/${id}`;
    let navigate =  useNavigate();

    const options =  {

        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        
        
    };
    const response = fetch(url, options)
    alert(`You will delete this task`) 

}
