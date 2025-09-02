import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Signup = ({userData, setUserData}) => {
  const navigate= useNavigate()

      const [eUserName,setEUserName]=useState([])
      const [ePassword,setEPassword]=useState([])
      

    function handleEUsername(e){
   setEUserName(e.target.value) 

   }
    function handleEPassword(e){
    setEPassword(e.target.value)

   }

   function addUsers(){
   setUserData([...userData, { username: eUserName, password: ePassword }]);

    console.log("Added")
    navigate('/login')
   }
 

    
  return (
     <div className='bg-black '>
        <div className='bg-white  '> 
            <h1 className='font-bold text-3xl'>Hey there</h1>
            <p>Sign up here :)</p>
            <div className=' flex flex-col w-52'>
            <input type='text' placeholder='Username' className='mt-3 border border-black rounded p-1' onChange={handleEUsername}></input>
            <input type='password' placeholder='Password' className='mt-3 border border-black rounded p-1'onChange={handleEPassword}></input>
           <input type='password' placeholder=' Confirm Password' className='mt-3 border border-black rounded p-1'></input>
            <button type='submit' className='bg-yellow-400 py-1 px-4 rounded mt-3 hover:bg-yellow-500' onClick={addUsers}>Sign Up</button>
           </div>
            <p className='mt-2'>Already have an account? <Link to="/login" className='underline'>Login</Link></p> 
            

        </div>
    </div>
    
  )
}

export default Signup