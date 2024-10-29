import React, { useEffect } from 'react'
import LoginComponent from "../components/LoginComponent"
function Login() {
  useEffect(()=>{
    console.log("in login component")
  },[])
  return (
    <div className='py-8'>
        <LoginComponent />
    </div>
  )
}

export default Login