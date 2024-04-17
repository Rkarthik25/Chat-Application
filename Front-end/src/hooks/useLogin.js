import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useLogin = () => {

  const [loading,setLoading]=useState(false)
  const {setAuthUser}=useAuthContext()
  const login=async (userName,password)=>{
    const success=handleInputError(userName,password)
    if(!success) return 
    setLoading(true)
    try {
        const res=await fetch("/api/auth/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({userName,password})
        })
        const data=await res.json()
        if(data.error){
            throw new Error(data.error)
        }
        localStorage.setItem("chat-user",JSON.stringify(data))
        setAuthUser(data)
        toast.success("Login Successful")

    } catch (error) {
        toast.error(error.message)
    }finally{
        setLoading(false)
    }

  }
  return {loading,login}
}

export default useLogin

function handleInputError(userName,password){
    if( !userName || !password ){
       toast.error("Fill all the fields")
       return false
    }  
    return true
}