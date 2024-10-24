import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/app/assets/svgs/logo.svg'
import searchIcon from '@/app/assets/svgs/search.svg'
import Button from '../button/button'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const links = [
    { title: 'Business Directory', url: '/contact' },
    { title: 'Features', url: '/pricing' },
    { title: 'Pricing', url: '/pricing' },
    { title: 'Blog', url: '#' }
  ]

  return (
    <div className='flex justify-between py-5 w-[90%] mx-auto items-center'>
      <Link href='/'>
        <Image src={logo} alt='dutiful logo' />
      </Link>

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
            // onClick={}
          />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
