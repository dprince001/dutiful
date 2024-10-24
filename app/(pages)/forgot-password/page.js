'use client'
import Footer from '@/app/components/footer/footer'
import Navbar from '@/app/components/navbar/navbar'
import React, { useState } from 'react'
import Input from '@/app/components/inputField/input'
import Button from '@/app/components/button/button'
import Image from 'next/image'
import Link from 'next/link'
import emailSentIcon from '@/app/assets/svgs/emailSent.svg'

const ForgotPasswordPage = () => {
  const [emailSent, setEmailSent] = useState(false)

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />

      {/* main content */}
      <section className='mb-20 sm:mb-[100px] max-w-[486px] mx-auto mt-16 w-[90%]'>
        {emailSent ? (
          <div className='flex flex-col'>
            <Image src={emailSentIcon} alt='email sent icon' className='mx-auto' />

            <p className='text-[#686868] mb-7 mt-5 text-center'>
              An OTP code has been sent to segunsolaru@gmail.com. Check your
              email to get the code
            </p>

            <Link href='/confirm-otp'>
              <Button text='Next' />
            </Link>
          </div>
        ) : (
          <>
            <h2 className='md:text-4xl text-2xl recoleta leading-[46px] mb-2'>
              Forgot password
            </h2>
            <p className='text-[#686868] mb-5'>
              Enter your email and well send you a mail on how to reset your
              password.
            </p>

            <div className='flex flex-col'>
              <Input label='Email' type='email' />

              <div className='mt-6'>
                <Button text='Send email' onClick={() => setEmailSent(true)} />
              </div>

              <p className='text-[#A3B1BF] mt-3 text-center text-sm'>
                Or?{' '}
                <a className='text-[#603F8B]' href='/login'>
                  Login
                </a>
              </p>
            </div>
          </>
        )}
      </section>

      <Footer />
    </div>
  )
}

export default ForgotPasswordPage
