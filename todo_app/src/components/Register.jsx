import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        const users = JSON.parse(localStorage.getItem('users')) || []
        const newUser = {username,password,todos: []}
        localStorage.setItem('users', JSON.stringify([...users, newUser]))
        navigate('/login')
    }

  return (
        <div className='flex items-center justify-center min-h-screen bg-[#F6FB7A]'>
          <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-sm'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Register</h2>
              <form action="" onSubmit={handleRegister} className='space-y-4'>
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

                <button type='submit' className='className="w-full bg-[#73BBA3] text-white p-2 rounded hover:bg-[#B4E380] transition'>Register</button>
              </form>
            </div>
        </div>
  )
}

export default Register