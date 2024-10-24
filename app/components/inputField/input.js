// import React from 'react'

// const Input = ({ type = 'text', label, required = true, textarea = false }) => {
//   return (
//     <div className='mb-5'>
//       <p className='mb-1 text-[#603F8B]'>
//         {label} {!required && <span className='italic'>(Optional)</span>}
//       </p>

//       {textarea ? (
//         <textarea
//           className='w-full border-2 border-[#E7EAF1] rounded-md p-3 bg-[#F8FAFD] resize-none outline-none'
//           rows='4'
//         />
//       ) : (
//         <input
//           type={type}
//           className='w-full border-2 border-[#E7EAF1] rounded-md p-3 bg-[#F8FAFD] outline-none'
//         />
//       )}
//     </div>
//   )
// }

// export default Input

'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import closedEye from '@/app/assets/svgs/closedEye.svg'
import openEye from '@/app/assets/svgs/openEye.svg'

const Input = ({ type = 'text', label, required = true, textarea = false }) => {
  const [showPassword, setShowPassword] = useState(false)

  // Toggles password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev)
  }

  return (
    <div className='mb-5'>
      <p className='mb-1 text-[#603F8B]'>
        {label} {!required && <span className='italic'>(Optional)</span>}
      </p>

      {textarea ? (
        <textarea
          className='w-full border-2 border-[#E7EAF1] rounded-md p-3 bg-[#F8FAFD] resize-none outline-none'
          rows='4'
        />
      ) : (
        <div className='relative'>
          <input
            type={type === 'password' && showPassword ? 'text' : type}
            className='w-full border-2 border-[#E7EAF1] rounded-md p-3 bg-[#F8FAFD] outline-none'
          />

          {type === 'password' && (
            <button
              type='button'
              onClick={togglePasswordVisibility}
              className='absolute right-3 top-1/2 transform -translate-y-1/2'
            >
              {showPassword ? (
                <Image src={openEye} alt='show password' />
              ) : (
                <Image src={closedEye} alt='hide password' />
              )}
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default Input
