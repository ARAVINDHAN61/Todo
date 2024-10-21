import React, { useState } from 'react'
import Inputindex from './component/Inputindex'
import Todolist from './component/Todolist'
import './App.css'

export default function App(){

  const[input,setInput]=useState('')
  const[tod,setTod]=useState([])

  const handlechange=(e)=>{
    setInput(e.target.value)
  }
  
  const handleclick=()=>{
   if(input !=""){
    setTod(tod =>[...tod,input])
    setInput('')
    }
}
    const deleteclick=(ko)=>{
      setTod((preinde)=>preinde.filter((preinde,todoindex)=>{
        return   todoindex !=ko;
      }))
    }
  return (
    <>
        <h1>Todo list</h1>
        <Inputindex  values={input} changes={handlechange} clicks={handleclick} />
        {
          tod.map((tod,index)=><div key={index}><Todolist todo={tod} buto={deleteclick} index={index}/></div>)
        }
    </>
  )
}
