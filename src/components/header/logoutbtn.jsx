import React from 'react'
import {useDispatch} from 'react-redux';
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import { useNavigate } from 'react-router';

function LogoutBtn() {
    const dispatch = useDispatch()
    const handleLogout = () => {
        authService.logOut().then(() => {
            dispatch(logout())
        }) 
    }
  return (
    <button onClick={handleLogout} className='hover:bg-zinc-500 bg-zinc-800 duration-300 px-6 py-1 rounded-full text-zinc-100 font-semibold mx-2 text-sm'>LogOut</button>
  )
}

export default LogoutBtn