import React, { useEffect, useState } from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Nav from './Nav'; 


const TodoApp = () => {

    const [todos, setTodos] = useState([])

    const [input, setInput] = useState('')

    useEffect(() =>{
        const savedTodos = JSON.parse(localStorage.getItem("todos"))
        if(savedTodos){
            setTodos(savedTodos)
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    }, [todos])
    

    const handleAddTodo =(e) =>{
        e.preventDefault()
        if(!input.trim()) return

        const newTodo ={
            id: Date.now(),
            text: input,
            completed: false,
        }
        setTodos([newTodo, ...todos])
        setInput('')
    }
    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo)=> 
            todo.id === id ? {...todo, completed : !todo.completed}: todo)
        )
    }

    const handleDelets = (id) =>{
        setTodos(todos.filter((todo)=> todo.id !==id))
    }



  return (
    <div>
        <div>
            <Nav /> 
        </div>
     <div className='flex w-full min-h-screen bg-gray-100 md:justify-center md:items-center'>
        <div className='w-fit min-w-[230px] rounded-2xl  shadow-lg pb-8 pt-6'>
            <div>
                <h1 className=' font-bold text-4xl text-center'>To-Do List</h1>
            </div>
 
            <form action="#" onSubmit={handleAddTodo} className='flex gap-4 justify-center mt-10'>
                <input
                 className=' border w-[200px] h-10 py-2 px-3   border-gray-300  rounded-lg focus:outline-none focus:ring focus:ring-green-200'
                 type="text" placeholder='Enter a task..' 
                
                 value={input} onChange={(e)=>
                      setInput(e.target.value)} />
                <button type='submit'
                className='bg-green-500 w-14 text-white rounded-lg hover:bg-green-600 transition'>Add</button>
            </form>

            <ul className='space-y-3 mt-4  w-[300px] mx-8'>
                {todos.map((todo)=>(
                    <li key={todo.id} 
                     className={`flex  justify-between items-center bg-gray-200 p-3 rounded-lg shadow-sm border border-gray-200 ${
                     todo.completed ? "line-through text-gray-400" : ""
                     }`}>
                        <span className='cursor-pointer ' onClick={()=> toggleComplete(todo.id)}>{todo.text}</span>
                        <button className='text-red-500 hover:text-red-600' onClick={()=> handleDelets(todo.id)}><RiDeleteBin5Line size={20} /></button>
                    </li>

                ))}
              
            </ul>

        </div>
     </div>
    </div> 
  )
}

export default TodoApp