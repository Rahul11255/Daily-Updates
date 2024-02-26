import React, { useState } from 'react'
import "./navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
   const [isopnen,setIsopen] = useState(false)

   const toggleMenu=()=>{
       setIsopen(!isopnen);
   }


  return (
    <nav className={isopnen?'navbar expanded':'navbar'}>
       <div className='logo_button'>logo</div>
       <div className={isopnen?'navbar_menu nv':"navbar_menu"} >
        <li><a href="/#">home</a></li>
        <li><a href="/#">about</a></li>
        <li><a href="/#">service</a></li>
       </div>
       <div className='toggle_menu' onClick={toggleMenu}>
        {isopnen?<CloseIcon/>:<MenuIcon/>}
       </div>  
    </nav>
  )
}

export default Navbar