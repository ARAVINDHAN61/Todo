import React from 'react'

export default function Todolist({todo,buto,index}) {
  return (
    <>
        <div className='container'>
            <div className='value'>
        <p>{todo}</p>
        <div className='list'>
         <input type="checkbox" />
         <button onClick={()=>buto(index)}>Delete</button>
        </div>
        </div>
        </div>

    </>
  )
}
