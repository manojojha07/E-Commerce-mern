import React, { useContext, useEffect, useState } from 'react'
import { loginUser, userRegister } from '../api/userAPI/user'
import { toast } from 'react-toastify'
import axios from 'axios'
import { backendURL } from '../App'
import { ShopContext } from '../context/ShopContext'


const Login = () => {
  const [currentState , setCurrentState] = useState('Login')
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('');

  const {token , setToken ,navigate  } = useContext(ShopContext)
   
  const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    if (currentState === 'Sign Up') {
      const res = await axios.post(backendURL+'/api/auth/register', {name,email,password});
      if(res.data.success){
        setToken(res.data.token);
        localStorage.setItem('token' , res.data.token)
        toast.success(res.data.message)
      }else{
        toast.error(res.data.message)
      }
    }
    else{
      const res = await axios.post(backendURL+'/api/auth/login', {email,password});
        if(res.data.success){
          setToken(res.data.token)
        localStorage.setItem('token' , res.data.token) 
          toast.success(res.data.message)
    }else{
         toast.error(res.data.message)
    }}
  } catch (error) {

    toast.error(error.message)
  }
    
};
useEffect(()=>{
if(token){
  navigate('/')
}},[token])



  return (
    <form onSubmit={handleSubmit} className='
    flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-500'>
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className='border-none h-[1.7px] w-9 bg-gray-800' />
      </div>
     {currentState === 'Login' ? '' : <input onChange={(e)=>setName(e.target.value)} required type="text" className='w-full px-3 py-2 border-gray-800 border' placeholder='name' /> }  
      <input onChange={(e)=>setEmail(e.target.value)} required type="email" className='w-full px-3 py-2 border-gray-800 border' placeholder='email' />
      <input onChange={(e)=>setPassword(e.target.value)} required type="password" className='w-full px-3 py-2 border-gray-800 border' placeholder='password' />
    <div className="w-full flex  justify-between text-sm mt-[8px]">
      <p className='cursor-pointer'>Forget your password</p>
      {currentState === 'Login' ? 
      <p onClick={()=> setCurrentState('Sign Up')} className='cursor-pointer'>Create new acount</p>
       : <p onClick={()=> setCurrentState('Login')} className='cursor-pointer'>Login here</p> }
    </div>
    < button type='submit' className='bg-black text-white font-light px-8  py-2 mt-4' 
    >{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
