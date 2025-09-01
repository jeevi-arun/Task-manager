import React from 'react'
import {FaSmile} from "react-icons/fa"
 
  import { useLocation } from 'react-router-dom';


const Header = () => {
  const data =useLocation()



console.log(Header.pathname); 

  return (
   
    <div> 
        <h1 className='text-3xl font-bold flex items-center gap-2'>Hello {data.state.username} <FaSmile className='text-yellow-500'> </FaSmile> </h1>
        <h3 className='text-green-600 text-xl'>I help you manage your activities</h3>
            
    </div>
  )
}

export default Header