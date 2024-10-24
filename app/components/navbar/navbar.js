'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/app/assets/svgs/logo.svg'
import searchIcon from '@/app/assets/svgs/search.svg'
import menuIcon from '@/app/assets/images/menu.png'
import closeIcon from '@/app/assets/images/close.png'
import Button from '../button/button'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const links = [
    { title: 'Business Directory', url: '/contact' },
    { title: 'Features', url: '/pricing' },
    { title: 'Pricing', url: '/pricing' },
    { title: 'Blog', url: '#' }
  ]

  return (
    <div className='flex justify-between py-5 w-[90%] mx-auto items-center relative'>
      <Link href='/'>
        <Image src={logo} alt='dutiful logo' />
      </Link>

      {/* Desktop Links */}
      <div className='hidden lg:flex items-center '>
        <Image src={searchIcon} alt='search icon' className='mr-10' />

        {links?.map(({ title, url }, index) => (
          <Link
            className='text-[#686868] sm:text-lg sm:mr-10 mr-5 shrink-0'
            key={index}
            href={url}
          >
            {title}
          </Link>
        ))}

        <Link
          href='/login'
          className='text-[#1E1E4B] font-medium text-lg sm:text-xl mx-10'
        >
          Login
        </Link>

        <Link href='/sign-up'>
          <Button
            text='Sign up'
            textColor='#603F8B'
            backgroundColor='#ffffff'
            borderColor='#603F8B'
            maxWidth='170px'
          />
        </Link>
      </div>

      <Image
        src={isMenuOpen ? closeIcon : menuIcon}
        alt='menu icon'
        className='lg:hidden mt-2 cursor-pointer'
        onClick={() => setMenuOpen(!isMenuOpen)}
      />

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full  bg-white transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
        } z-50`}
      >
        <div className='flex justify-between items-center py-5 px-[5%]'>
          <Link href='/'>
            <Image src={logo} alt='dutiful logo' />
          </Link>

          <Image
            src={closeIcon}
            alt='close icon'
            className='cursor-pointer'
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <div className='flex flex-col space-y-4 py-5 px-[5%]'>
          {links?.map(({ title, url }, index) => (
            <Link
              key={index}
              href={url}
              className='text-[#686868] text-lg'
              onClick={() => setMenuOpen(false)}
            >
              {title}
            </Link>
          ))}

          <Link
            href='/login'
            className='text-[#1E1E4B] font-medium text-lg'
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>

          <Link href='/sign-up' onClick={() => setMenuOpen(false)}>
            <Button
              text='Sign up'
              textColor='#603F8B'
              backgroundColor='#ffffff'
              borderColor='#603F8B'
              maxWidth='100%'
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
