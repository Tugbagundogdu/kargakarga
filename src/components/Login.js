'use client';
import React, { useState } from 'react'
import {useRouter} from 'next/navigation';
import axios from 'axios';

const Login = () => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        try{
            const res = await axios.post('https://api.management.parse25proje.link/api/auth/login', {email , password});
            if(res.data.status === true){
        console.log(res.data);
            localStorage.setItem('userToken', res.data.data.token); 
                router.push('/dashboard');
            }else{
                alert('password or email is wrong')

            }
            
        }catch(err){
            console.log(err , "catchhh");
            alert('password or email is wrong')
        }
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    }
//tugba.gundgdu@gmail.com

  return (
    <section className='flex justify-center items-center h-screen bg-[#f3f6fd]'>
        <form action="" className='flex flex-col  justify-center w-96 border border-gray p-4 space-y-3 rounded-md task-shadow ' onSubmit={handleSubmit}>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} className='border border-gray-400 outline-none p-2 rounded-md '/>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className='border border-gray-400 outline-none rounded-md p-2 '/>
            <button type='submit' className='p-2 rounded-sm text-white bg-slate-500 ' >Login</button>
        </form>
    </section>

  )
}

export default Login
