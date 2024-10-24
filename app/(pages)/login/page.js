'use client'
import Footer from '@/app/components/footer/footer'
import Navbar from '@/app/components/navbar/navbar'
import React, { useState } from 'react'
import Input from '@/app/components/inputField/input'
import Button from '@/app/components/button/button'

const LoginPage = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />

      {/* main content */}
      <section className='mb-20 sm:mb-[100px] max-w-[486px] mx-auto mt-16 w-[90%]'>
        <p className='text-[#686868] sm:mb-2'>Jump right back in</p>
        <h2 className='md:text-4xl text-2xl recoleta leading-[46px] mb-5'>
          Login
        </h2>

        <div className='flex flex-col'>
          <Input label='Email' type='email' />
          <Input label='Password' type='password' />

          <a
            className='text-[#a16be8] text-sm ml-auto -mt-2 inline-block mb-7'
            href='/forgot-password'
          >
            Forgot password?
          </a>

          <Button text='Login' />

          <p className='text-[#A3B1BF] mt-3 text-center text-sm'>
            Don’t have an account?{' '}
            <a className='text-[#a16be8] underline' href='/sign-up'>
              Sign Up
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default LoginPage
