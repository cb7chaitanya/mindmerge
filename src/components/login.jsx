import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button, Input, Logo} from './index.js'
import {useDispatch} from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()
  const [error, setError] = useState("")

  const login = async(data) => {
    setError("")
    try {
      const session = await authService.login(data)
      if(session){
        const userData = await authService.getLogIn()
        if(userData) dispatch(authLogin(userData))
        navigate('/')
      }
    } catch(error){
      setError(error.message)
    }
  }

  return (
    <div
    className='flex items-center justify-center w-full my-[136px] sm:mt-60 sm:mb-64'
    >
        <div className={`mx-auto w-full max-w-lg bg-zinc-100 rounded-xl p-10 border border-black/10 md:py-12`}>
        <div className="mb-2 flex justify-center md:py-2">
                    <span className="inline-block w-full max-w-[100px]">
                        <span className='font-bold text-4xl text-zinc-800'>Mind</span>
                        <br></br>
                        <span className='font-bold text-4xl text-zinc-800'>Merge</span>
                    </span>
        </div>
        <Link to="/signup"><h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2></Link>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input className='rounded-xl border-2 focus:border-black focus:ring-1 ml-2'
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input className='rounded-xl border-2 focus:border-black ml-2 mb-4'
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <Button
                type="submit"
                className="w-full bg-zinc-800 rounded-xl py-2 hover:bg-zinc-600 duration-200"
                >Sign in</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login