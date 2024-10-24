'use client'
import Footer from '@/app/components/footer/footer'
import Navbar from '@/app/components/navbar/navbar'
import React, { useState } from 'react'
import Input from '@/app/components/inputField/input'
import Button from '@/app/components/button/button'
import Link from 'next/link'

const ResetPasswordPage = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />

      {/* main content */}
      <section className='mb-20 sm:mb-[100px] max-w-[486px] mx-auto mt-16 w-[90%]'>
        <h2 className='md:text-4xl text-2xl recoleta leading-[46px] sm:mb-2'>
          Reset password
        </h2>
        <p className='text-[#686868] mb-5'>Set your new password</p>

        <div className='flex flex-col'>
          <Input label='Enter new password' type='password' />
          <Input label='Re-enter new password' type='password' />

          <Link href='/login'>
            <Button text='Reset password' />
          </Link>

          <p className='text-[#A3B1BF] mt-3 text-center text-sm'>
            Or?{' '}
            <a className='text-[#603F8B]' href='/sign-up'>
              Create new account.
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ResetPasswordPage
