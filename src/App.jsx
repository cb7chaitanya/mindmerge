import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import authService from './appwrite/auth.js'
import {login, logout} from './store/authSlice.js'
import Header from './components/header/header.jsx';
import FooterComponent from './components/footer/footer.jsx';
import {Outlet} from 'react-router-dom'
import Lottie from 'lottie-react'
import Loading from './assets/Animation - 1711737842976.json'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=> {
    authService.getLogIn()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else {
        dispatch(logout())
      }
    },[])
    .finally(() => setLoading(false))
  })

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gradient-to-r from-main to-secondary'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet /> 
        </main>
        <FooterComponent />
      </div>
    </div>
  ) : <div className='flex-items-center justify-center'>
    <Lottie animationData={Loading} className='-translate-y-52'/>
  </div>

}

export default App;
