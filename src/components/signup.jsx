import React, {useState} from 'react'
import authService from '../appwrite/auth'
import {Link, useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button, Input, Logo} from './index'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

export default function SignUp() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const signUp = async(data) => {
        setError("")
        try{
            const userData = await authService.createAccount(data)
            if(userData){
                const userData = await authService.getLogIn()
                if(userData) dispatch(login(userData));
                navigate ("/")
            }
        } catch(error){
            setError(error)
        }
    }
  return (
    <div className='flex items-center justify-center my-[136px] sm:mt-60 sm:mb-64'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 md:py-12`}>
            <div className='mb-2 flex justify-center md:py-2'>
                <span className='inline-block w-full max-w-[100px]'>
                    <span className='font-bold text-4xl text-zinc-800'>Mind</span>
                    <br></br>
                    <span className='font-bold text-4xl text-zinc-800'>Merge</span>
                </span>
            </div>
            <h2 className='text-center text-2xl font-bold leading-tight'>Sign up to create your account</h2>
      <p className='mt-2 text-center text-base text-black/60'>
        Already have an account?
        <Link to="/login" className='font-medium text-primary transition-all duration-200 hover:underline'> Sign In</Link>
      </p>
      {error && <p className='text-red-600 text-center mt-8'>{error}</p>}

      <form onSubmit={handleSubmit(signUp)} className='mt-8'>
        <div className='space-y-5'>
            <Input className='rounded-xl border-2 focus:border-black focus:ring-1 ml-2'
            label="Full Name: " placeholder="Enter your full name" {...register("name", {
                required: true,
            })} />
            <Input className='rounded-xl border-2 focus:border-black focus:ring-1 ml-2' label="Email: " placeholder="Enter your email" type="email" {...register("email", {
            required: true,
            validate: {
              matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
            }
          })} />
          <Input className='rounded-xl border-2 focus:border-black focus:ring-1 ml-2 mb-4' label="Password: " type="password" placeholder="Enter your password" {...register("password", {
            required: true,
          })}/>
          <Button className='w-full bg-zinc-800 rounded-xl py-2 hover:bg-zinc-600 duration-200' type="submit">Create Account</Button>
        </div>
      </form>
        </div>
    </div>
  )
}