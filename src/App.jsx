import { useState } from "react";

import { Route,BrowserRouter,Routes } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup";
import TaskManage from "./components/TaskManage";

function App() {
  const [userData,setUserData]=useState([
          {
              username:"",
              password:""
          }
      ])
 

  return (
    <div className="min-h-screen bg-black p-6">
      <div className=" bg-white p-6 rounded shadow">
      
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>

          <Route path='/login' element={<Login userData={userData} setUserData={setUserData}/>}></Route>
          <Route path="/signup" element={<Signup userData={userData} setUserData={setUserData}/>}></Route>
          <Route path="/task-manage" element={<TaskManage/>}></Route>

        </Routes>
        </BrowserRouter>
        
       

        
      </div>
    </div>
  );
}

export default App;
