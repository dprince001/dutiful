'use client'
import Footer from '@/app/components/footer/footer'
import Navbar from '@/app/components/navbar/navbar'
import React, { useState } from 'react'
import Input from '@/app/components/inputField/input'
import Button from '@/app/components/button/button'
import Image from 'next/image'
import UserIcon from '@/app/assets/svgs/user'
import ServiceProvider from '@/app/assets/svgs/serviceProvider'
import activeCheck from '@/app/assets/svgs/activeCheck.svg'

const SignUpPage = () => {
  const [activeOption, setActiveOption] = useState('Regular user')
  const [isChecked, setIsChecked] = useState(false)

  const signInOptions = [
    { Icon: UserIcon, title: 'Regular user' },
    { Icon: ServiceProvider, title: 'Service provider' }
  ]

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />

      {/* main content */}
      <section className='mb-20 sm:mb-[100px] max-w-[486px] mx-auto mt-16 w-[90%]'>
        <p className='text-[#686868] mb-2'>Sign up for free!</p>
        <h2 className='md:text-4xl text-2xl recoleta leading-[46px] mb-5'>
          Get started
        </h2>

        <div className='flex gap-10 mb-12'>
          {signInOptions?.map(({ Icon, title }, index) => (
            <div
              key={index}
              className={`flex gap-4 items-center border relative cursor-pointer w-full p-4 transition-all duration-200 ease-in-out justify-center rounded-[11px] ${
                title == activeOption ? 'border-[#603F8B]' : 'border-[#EEEEFF]'
              }`}
              onClick={() => setActiveOption(title)}
            >
              <Icon active={title == activeOption} />
              <p
                className={`sm:text-lg ${
                  title == activeOption ? 'text-[#230B34]' : 'text-[#B1BDCA]'
                }`}
              >
                {title}
              </p>

              {title == activeOption && (
                <Image
                  src={activeCheck}
                  alt='active sign in option identifier'
                  className='absolute -top-3 -right-3'
                />
              )}
            </div>
          ))}
        </div>

        <div className=''>
          <Input label='Full name' />
          <Input label='Email' type='email' />
          <Input label='Phone number' type='number' />
          <Input label='Password' type='password' />
          <Input label='Re-enter password' type='password' />

          <div className='flex gap-1 items-center mb-8'>
            <label className='flex items-center cursor-pointer'>
              <input
                type='checkbox'
                className='hidden'
                aria-label='checkbox'
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />

              <span
                className={`w-4 h-4 mr-2 rounded-[5px] border-2 border-[#A16AE8] flex items-center justify-center transition-all duration-300 ${
                  isChecked ? 'bg-[#A16AE8]' : 'bg-white'
                }`}
              >
                {isChecked && (
                  <svg
                    className='w-4 h-4 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='3'
                  >
                    <path d='M5 13l4 4L19 7' />
                  </svg>
                )}
              </span>
            </label>

            <p className='text-[#3F3F3F] text-sm'>
              I agree to Dutiful’s{' '}
              <span className='text-[#a16be8] underline'>
                terms and conditions
              </span>
            </p>
          </div>

          <Button text='Sign up' />

          <p className='text-[#A3B1BF] mt-3 text-center text-sm'>
            Already have an account?{' '}
            <a className='text-[#a16be8] underline' href='/login'>Login</a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default SignUpPage
