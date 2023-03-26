import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import Get from './components/Get'
import { Form } from './components/Form'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import GetTasks from './pages/listTasks'
import './App.css'
import { FormPage } from './pages/createTask'
import { Update } from './pages/updateTask'
import { DeleteTask } from './components/RemoveTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
    
    <BrowserRouter>
      
      <Routes>
            <Route path="/create" element={<FormPage/>}/>
            <Route path="/update/:id" element={<Update/>}/>
            <Route path="/" element={<GetTasks/>}/>

        </Routes>
    </BrowserRouter>
      
        
      
   
      
    </div>
  )
}

export default App
