import React from 'react'
import '../App.css'
import Create from './Create'
import Read from './Read'
import Update from './Update'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const TodoApp = () => {
  return (
    <div className='App'>
     <h2> CURD Operation </h2>
     <BrowserRouter>
     <Routes>
        <Route exact path='/create' element={<Create/>}/>
        <Route path='/read' element={<Read/>}/>
        <Route path='/update' element={<Update/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default TodoApp
