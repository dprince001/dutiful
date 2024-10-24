import React from 'react'
import facebook from '@/app/assets/svgs/facebook.svg'
import instagram from '@/app/assets/svgs/instagram.svg'
import twitter from '@/app/assets/svgs/twitter.svg'
import linkedIn from '@/app/assets/svgs/linkedIn.svg'
import youtube from '@/app/assets/svgs/youtube.svg'
import playstore from '@/app/assets/svgs/playstore.svg'
import apple from '@/app/assets/svgs/apple.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-primary text-white py-14 mt-auto'>
      <section className='w-[85%] mx-auto flex flex-wrap justify-between'>
        <div className='min-w-[200px] mb-5'>
          <h3 className='font-medium sm:text-xl text-lg mb-4'>Company</h3>
          <p className='text-[#B6B6E5] mb-2'>About</p>
          <a className='text-[#B6B6E5]' href='/contact'>
            Contact us
          </a>
          <p className='text-[#B6B6E5] mt-2'>FAQs</p>
        </div>

        <div className='min-w-[200px] mb-5'>
          <h3 className='font-medium sm:text-xl text-lg mb-4'>Quick links</h3>
          <p className='text-[#B6B6E5] mb-2'>Find services</p>
          <p className='text-[#B6B6E5] mb-2'>Pricing & plans</p>
          <p className='text-[#B6B6E5] mb-2'>List your business</p>
        </div>

        <div className='min-w-[200px] mb-5'>
          <h3 className='font-medium sm:text-xl text-lg mb-4'>Resources </h3>
          <p className='text-[#B6B6E5] mb-2'>Blog</p>
          <p className='text-[#B6B6E5] mb-2'>Affiliate program</p>
        </div>

        <div className='min-w-[200px] mb-5'>
          <h3 className='font-medium sm:text-xl text-lg mb-4'>
            More from Dutiful{' '}
          </h3>
          <p className='text-[#B6B6E5] mb-2'>Dutiful jobs</p>
        </div>
      </section>

      {/* line */}
      <div className='h-1 border-b w-[85%] mx-auto border-[#63428E] my-7'></div>

      <section className='md:flex items-center justify-between w-[85%] mx-auto'>
        <div className='flex items-center gap-5 max-md:mb-5'>
          <p className='sm:text-lg font-medium'>Follow us</p>

          <Image src={facebook} alt='facebook icon' />
          <Image src={instagram} alt='instagram icon' />
          <Image src={twitter} alt='twitter icon' />
          <Image src={youtube} alt='youtube icon' />
          <Image src={linkedIn} alt='linkedIn icon' />
        </div>

        <div className='flex items-center gap-5'>
          <p className='sm:text-lg font-medium'>Download the app</p>

          <Image src={apple} alt='apple icon' />
          <Image src={playstore} alt='playstore icon' />
        </div>
      </section>

      {/* line */}
      <div className='h-1 border-b w-[85%] mx-auto border-[#63428E] my-7'></div>

      <div className='sm:flex items-center w-[85%] mx-auto gap-10'>
        <p className='sm:text-lg max-sm:mb-2'>© 2022 Dutiful®</p>
        <p className='text-[#B6B6E5] md:ml-20 max-sm:mb-2'>Terms of Service</p>
        <p className='text-[#B6B6E5] max-sm:mb-2'>Privacy policy</p>
        <p className='text-[#B6B6E5]'>Disclaimer</p>
      </div>
    </div>
  )
}

export default Footer
