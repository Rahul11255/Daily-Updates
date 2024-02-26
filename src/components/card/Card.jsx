import React from 'react'
import "./card.css"
import nature from "./nature.jpg"

const Card = () => {
  return (
    <div className='container'>
       <div className='card'>
        <img src={nature} loading="lazy" className='img' alt="" />
           <div  className='card_body'>
               <h1>Nike</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quaerat dolorum quos voluptas cumque iusto totam dolor corporis provident sapiente?</p>
               <p style={{color:"rgb(26, 153, 153)"}}>Hello,Sam</p>
               <button>read more</button>
           </div>
       </div>
    </div>
  )
}

export default Card