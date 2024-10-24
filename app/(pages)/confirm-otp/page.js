'use client'
import Footer from '@/app/components/footer/footer'
import Navbar from '@/app/components/navbar/navbar'
import React, { useState, useRef } from 'react'
import Button from '@/app/components/button/button'
import Link from 'next/link'

const ConfirmOTPPage = () => {
  const [otp, setOtp] = useState(['', '', '', ''])
  const inputRefs = useRef([])

  const handleChange = (value, index) => {
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />

      {/* main content */}
      <section className='mb-20 sm:mb-[100px] max-w-[486px] mx-auto mt-16 w-[90%]'>
        <div className='flex flex-col'>
          <div className='flex justify-center gap-3'>
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={el => (inputRefs.current[index] = el)}
                type='text'
                value={digit}
                onChange={e => handleChange(e.target.value, index)}
                maxLength='1'
                className='w-12 h-12 text-center text-xl border-2 border-[#B6B6E5] rounded-md p-3 bg-[#F3F3F3] outline-none'
              />
            ))}
          </div>

          <p className='text-[#686868] my-7 text-center'>
            Enter OTP code that was sent to your email, segunsolaru@gmail.com.
          </p>

          <Link href='/reset-password'>
            <Button text='Confirm OTP' />
          </Link>

          <p className='text-[#A3B1BF] mt-3 text-center text-sm'>
            Didn't get a code? <span className='text-[#603F8B]'>Resend</span>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ConfirmOTPPage
