import React, {createContext, useState, useEffect} from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        try {
            const savedUser = JSON.parse(localStorage.getItem('user'))
        if(savedUser){
            setUser(savedUser)
        }
        } catch (error) {
            console.error('Error parsing JSON from local storage: ', error);
        }
    },[])

    const login = (userData) => {
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData))
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('user')
    }

    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}