import Footer from '@/app/components/footer/footer'
import Navbar from '@/app/components/navbar/navbar'
import React from 'react'
import phone from '@/app/assets/svgs/phone.svg'
import businessAddress from '@/app/assets/svgs/businessAddress.svg'
import customerSupport from '@/app/assets/svgs/customerSupport.svg'
import Image from 'next/image'
import Input from '@/app/components/inputField/input'
import Select from '@/app/components/select/select'
import Button from '@/app/components/button/button'

const ContactPage = () => {
  const cards = [
    {
      icon: customerSupport,
      title: 'Customer support',
      detail: 'Please fill out the form below'
    },
    {
      icon: businessAddress,
      title: 'Business address',
      detail:
        'Suites (C113 & C114) Akord Shopping Mall, Bogije, Elemoro, 101001, Lagos, Nigeria'
    },
    {
      icon: phone,
      title: 'Phone number',
      detail: '+234 903 921 6724'
    }
  ]

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />

      {/* main content */}
      <section className='mb-20'>
        <div className='bg-primary text-white sm:p-16 p-8 pb-32 text-center relative'>
          <h2 className='sm:text-4xl text-2xl recoleta sm:leading-[46px] leading-[35px] mb-3'>
            Get in touch
          </h2>

          <p className='sm:text-xl text-[#EDDFFF] max-w-[888px] mx-auto'>
            We are here to support you throughout the process of getting your
            business listed.
          </p>

          {/* overlay */}
          <div className='texture-overlay absolute inset-0 z-20'></div>
        </div>

        <div className='lg:flex justify-between gap-10 mx-auto w-[90%] mt-[-70px] mb-20 relative z-50'>
          {cards?.map(({ icon, title, detail }, index) => (
            <div
              key={index}
              className='bg-white p-8 rounded-[12px] shadow-lightCardShadow mb-5 w-full border border-[#EEEEFF]'
            >
              <div className='flex gap-7 justify-center mb-3'>
                <Image src={icon} alt={`${title} icon`} />

                <h4 className='text-[#1E1E4B] sm:text-2xl text-lg font-semibold my-2'>
                  {title}
                </h4>
              </div>

              <p className='text-[#464646] leading-[24px] text-center'>
                {detail}
              </p>
            </div>
          ))}
        </div>

        <div className='max-w-[600px] w-[90%] mx-auto'>
          <Input label='Full name' />
          <Input label='Email' type='email' />
          <Input label='Business type' required={false} />

          <Select label='Subject' />
          <Input label='Write your message' textarea />

          <Button text='Send message' />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage
