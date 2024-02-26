import React, { useState } from 'react'
import "./style.css"

const Usestate = () => {
    const [num,setNum] = useState(0)

    const addButton = ()=>{
        setNum(num+1)
    }

    const subButton = ()=>{
        if(num === 0){
            setNum(0)
        }else{
        setNum(num - 1)
        }
    }

  return (
    <div className='hooks_container'>
      <button onClick={addButton}>+</button>    
       <h3>{num}</h3>
      <button onClick={subButton} style={{cursor:num === 0 ? "not-allowed":"pointer"}} disabled={num===0}>-</button>    
    </div>
  )
}

export default Usestate