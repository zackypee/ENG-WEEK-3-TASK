import { useState } from 'react'
import './App.css'
import TodoApp from './Apps/TodoApp'
import { Route, Routes } from 'react-router-dom'
import QuoteGenerate from './routes/QuoteGenerate'
import RecipeFinder from './routes/RecipeFinder'


function App() {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<TodoApp/>} />
        <Route path='/quote' element={<QuoteGenerate/>} />
        <Route path='/recipe' element={<RecipeFinder/>} />

      </Routes>
    </>
  )
}

export default App
