import React from 'react'
import Navbar from '@/app/components/navbar/navbar'
import Footer from '@/app/components/footer/footer'
import Button from '@/app/components/button/button'
import check from '@/app/assets/svgs/check.svg'
import Image from 'next/image'
import PricingTable from './table'

const PricingPage = () => {
  const plans = [
    {
      name: 'Basic',
      price: '0',
      access: [
        'Access to dashboard',
        'Add up to 2 businesses',
        'Add up to 2 products/services',
        'Add up to 2 Images',
        'Unlimited keywords',
        'Display service hours and prices',
        'Display address, contact and email',
        'Instant chat',
        'Reviews and ratings',
        'Profile visibility',
        'Instant notifications',
        'Display website and social network',
        'Quotes',
        'Bookmarks'
      ]
    },
    {
      name: 'Standard',
      price: '20,000',
      access: [
        'Access to dashboard',
        'Add up to 6 businesses',
        'Add up to 6 products/services',
        'Add up to 4 Images',
        'Unlimited keywords',
        'Display service hours and prices',
        'Display address, contact and email',
        'Instant chat',
        'Reviews and ratings',
        'Profile visibility',
        'Instant notifications',
        'Display website and social network',
        'Quotes',
        'Bookmarks',
        'Number of  profile views',
        'Verified badge (purple)',
        'Accept & Sell appointment',
        'Latest offers'
      ]
    },
    {
      name: 'Premium',
      price: '30,000',
      access: [
        'Access to dashboard',
        'Add up to 10 businesses',
        'Add up to 10 products/services',
        'Add up to 6 Images',
        'Unlimited keywords',
        'Display service hours and prices',
        'Display address, contact and email',
        'Instant chat',
        'Reviews and ratings',
        'Profile visibility',
        'Instant notifications',
        'Display website and social network',
        'Quotes',
        'Bookmarks',
        'Number of  profile views',
        'Verified badge (purple)',
        'Accept & Sell appointment',
        'Latest offers',
        '24/7 service and support'
      ]
    }
  ]

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />

      {/* main content */}
      <section className='mb-20 sm:mt-14 mt-10'>
        <div className='bg-white sm:p-16 p-8 text-center'>
          <h2 className='sm:text-4xl text-[#1E1E4B] text-2xl recoleta sm:leading-[46px] leading-[35px] mb-3'>
            Plans to Suit Your Business Budget
          </h2>

          <p className='sm:text-xl text-[#656565] max-w-[888px] mx-auto'>
            Our fully organized plans deliver valuable content that showcases
            your services and skills, drives Lead, covers all features, and
            gives customers a clear idea to be able to choose your services.
          </p>
        </div>

        <section className='bg-[#FCFAFF] py-16'>
          <div className='w-[90%] mx-auto grid lg:grid-cols-3 grid-cols-1 gap-10 mb-16'>
            {plans?.map(({ access, name, price }, index) => (
              <div key={index} className='bg-white p-5 py-10'>
                <p className='font-medium sm:text-xl mb-5'>{name}</p>
                {price == 0 ? (
                  <h3 className='font-medium recoleta sm:text-4xl text-2xl font-serif mb-5'>
                    Free
                  </h3>
                ) : (
                  <h3 className='font-medium recoleta sm:text-4xl text-2xl font-serif flex gap-[2px] mb-5'>
                    <span className='text-base'>NGN</span>
                    <span>{price}</span>
                    <span className='text-base self-end'>/year</span>
                  </h3>
                )}

                <Button text='Get started' />

                <section className='mt-5'>
                  {access?.map((acc, index) => (
                    <div key={index} className='flex gap-3 mb-4'>
                      <Image src={check} alt='check icon' />

                      <p className='text-[#656565]'>{acc}</p>
                    </div>
                  ))}
                </section>
              </div>
            ))}
          </div>

          <div className='w-[90%] mx-auto'>
            <h2 className='font-medium sm:text-2xl text-lg mb-16'>
              Features Overview
            </h2>
            <PricingTable />
          </div>
        </section>
      </section>

      <Footer />
    </div>
  )
}

export default PricingPage
