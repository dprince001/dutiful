import React from 'react'
import Image from 'next/image'
import downArrow from '@/app/assets/svgs/downArrow.svg'

const Select = ({ label, required = true }) => {
  return (
    <div className='mb-5'>
      <p className='mb-1 text-[#603F8B]'>
        {label} {!required && <span className='italic'>(Optional)</span>}
      </p>

      <div className='relative'>
        <select className='w-full border-2 border-[#E7EAF1] rounded-md p-3 bg-[#F8FAFD] outline-none appearance-none'></select>

        <Image
          src={downArrow}
          alt='down arrow'
          className='absolute right-6 top-4'
        />
      </div>
    </div>
  )
}

export default Select
