'use client';
import React, { useState } from 'react'
import {useRouter} from 'next/navigation';
import axios from 'axios';
import LayoutComponent from '../LayoutComponent';

const page = () => {

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
                alert('yanlıs sifre asko')
            }
            
        }catch(err){
            console.log(err , "catchhh");
        }
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    }
//tugba.gundgdu@gmail.com

  return (
    <LayoutComponent>
    <section className='flex justify-center items-center h-screen'>
        <form action="" className='flex flex-col  justify-center w-96 border border-black p-4 space-y-3  ' onSubmit={handleSubmit}>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} className='border border-gray-400'/>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className='border border-gray-400'/>
            <button type='submit' className='border border-black bg-slate-500 ' >Login</button>
        </form>
    </section>
    </LayoutComponent>
  )
}

export default page
