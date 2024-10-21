import React from 'react'

export default function Inputindex({values,changes,clicks}){
  return (
    <div>
      <div className='input'>
        <input type="text" value={values} onChange={changes} />
        <button onClick={clicks}>+</button>
      </div>
    </div>
  )
}
