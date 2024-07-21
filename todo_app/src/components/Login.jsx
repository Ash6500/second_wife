import React, {useState,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Login = () => {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const{login} = useContext(AuthContext)
    const navigate =useNavigate()

    const handleLogin = (e) =>{
        e.preventDefault()
        const users = JSON.parse((localStorage.getItem('users')) || [])
        const user = users.find((u) => u.username === username && u.password === password)
        if(user){
            login(user)
            navigate('/')
        }else{
            alert('Invalid credentials! Not a member? <a href="/register">Register</a>')
        }
    }

  return (
    <div className='flex items-center justify-center min-h-screen bg-[#F6FB7A]'>
        <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-sm'>
            <h2 className=' text-2xl font-bold mb-6 text-center'>Login</h2>
            <form action="" onSubmit={handleLogin} className='space-y-4'>
            <input 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
            required 
            className='w-full p-2 border border-gray-300 rounded'
            />

            <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            required 
            className='w-full p-2 border border-gray-300 rounded'
            />

            <button type='submit' className='w-full bg-[#73BBA3] p-2 rounded hover:bg-[#B4E380] transition'>Login</button>
        </form>

        <p className='mt-4 text-center'>
            Not a member?{' '}
            <a href="/register" className='text-blue-500 hover:underline'>
                Register
            </a>
        </p>
        </div>
    </div>
  )
}

export default Login