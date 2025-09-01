import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function login({userData,setUserData}){

    
const navigate =useNavigate()
    const [eUserName,setEUserName]=useState([])
    const [ePassword,setEPassword]=useState([])
    const [regUser, setRegUser]=useState(true)
     const data =useLocation()
  


   function handleEUsername(e){
   setEUserName(e.target.value) 

   }
    function handleEPassword(e){
    setEPassword(e.target.value)

   }

   function handleLogin(){
    var userFound =false
    userData.forEach(function(item){
        if(item.username===eUserName && item.password===ePassword){
            console.log("LOgin successful")
            userFound=true
            navigate('/task-manage',{state:{username:eUserName}})
        }})
        
        if(userFound===false){
            console.log("login failed")
            setRegUser(false)
          
        }
    

   }

    return(
      <div className='bg-black '>
        <div className='bg-white  '> 
            <h1 className='font-bold text-3xl'>Hey {data.state.username}</h1>
            {regUser?<p>I help you manage your activities after you login :)</p> : <p className='text-red-500 text-xl'>Please sign up before you login</p>}
            
            <div className=' flex flex-col w-52'>
            <input type='text' placeholder='Username' className='mt-3 border border-black rounded p-1' onChange={handleEUsername}></input>
            <input type='text' placeholder='Password' className='mt-3 border border-black rounded p-1' onChange={handleEPassword}></input>
            
            <button type='submit' className='bg-violet-400 py-1 px-4 rounded mt-3 hover:bg-violet-700'
            onClick={handleLogin}>Login</button>
           </div>
            <p className='mt-2'>Don't have an account? <Link to="/signup" className='underline'>SignUp</Link></p> 
            

        </div>
    </div>
        

    )
        
}
export default login