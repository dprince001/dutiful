import Button from '@/app/components/button/button'
import Image from 'next/image'
import React from 'react'
import purpleCheck from '@/app/assets/svgs/purpleCheck.svg'
import cancelIcon from '@/app/assets/svgs/cancel.svg'

const CheckMark = () => (
  <Image src={purpleCheck} alt='check icon' className='w-[24px] mx-auto' />
)

const CancelMark = () => (
  <Image src={cancelIcon} alt='cancel icon' className='w-[24px] mx-auto' />
)

const plans = [
  {
    name: 'Basic',
    features: {
      'Access to dashboard': <CheckMark />,
      'No. of business listings': '2 businesses',
      'No. of products/services': '2',
      'No. of Images': '2',
      Keywords: <CheckMark />,
      'Display service hours & prices': <CheckMark />,
      'Display address, email & contact': <CheckMark />,
      'Instant chat': <CheckMark />,
      'Reviews & ratings': <CheckMark />,
      'Profile visibility': <CheckMark />,
      'Instant notifications': <CheckMark />,
      'Display website & social network': <CheckMark />,
      Quotes: <CheckMark />,
      Bookmarks: <CheckMark />,
      'Profile views': <CancelMark />,
      'Verified badge': <CancelMark />,
      'Latest offers': <CancelMark />,
      'Accept & sell appointment': <CancelMark />,
      '24/7  support': <CancelMark />
    }
  },
  {
    name: 'Standard',
    features: {
      'Access to dashboard': <CheckMark />,
      'No. of business listings': '6 businesses',
      'No. of products/services': '6',
      'No. of Images': '4',
      Keywords: <CheckMark />,
      'Display service hours & prices': <CheckMark />,
      'Display address, email & contact': <CheckMark />,
      'Instant chat': <CheckMark />,
      'Reviews & ratings': <CheckMark />,
      'Profile visibility': <CheckMark />,
      'Instant notifications': <CheckMark />,
      'Display website & social network': <CheckMark />,
      Quotes: <CheckMark />,
      Bookmarks: <CheckMark />,
      'Profile views': <CheckMark />,
      'Verified badge': 'Purple',
      'Latest offers': <CheckMark />,
      'Accept & sell appointment': <CheckMark />,
      '24/7  support': <CancelMark />
    }
  },
  {
    name: 'Premium',
    features: {
      'Access to dashboard': <CheckMark />,
      'No. of business listings': '10 businesses',
      'No. of products/services': '10',
      'No. of Images': '6',
      Keywords: <CheckMark />,
      'Display service hours & prices': <CheckMark />,
      'Display address, email & contact': <CheckMark />,
      'Instant chat': <CheckMark />,
      'Reviews & ratings': <CheckMark />,
      'Profile visibility': <CheckMark />,
      'Instant notifications': <CheckMark />,
      'Display website & social network': <CheckMark />,
      Quotes: <CheckMark />,
      Bookmarks: <CheckMark />,
      'Profile views': <CheckMark />,
      'Verified badge': 'Gold',
      'Latest offers': <CheckMark />,
      'Accept & sell appointment': <CheckMark />,
      '24/7  support': <CheckMark />
    }
  }
]

const PricingTable = () => {
  const featureNames = Object.keys(plans[0].features)

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full'>
        <thead>
          <tr>
            <th className='py-3 px-6 text-left font-medium text-[#656565]'>
              Features & Services
            </th>

            <th className='py-3 px-6 text-center font-medium'>
              <div className='flex flex-col items-center max-w-[240px] mx-auto'>
                <p className='mb-2'>Basic</p>
                <Button text='Get started' />
              </div>
            </th>

            <th className='py-3 px-6 text-center font-medium'>
              <div className='flex flex-col items-center max-w-[240px] mx-auto'>
                <p className='mb-2'>Standard</p>
                <Button text='Get started' />
              </div>
            </th>

            <th className='py-3 px-6 text-center font-medium'>
              <div className='flex flex-col items-center max-w-[240px] mx-auto'>
                <p className='mb-2'>Premium</p>
                <Button text='Get started' />
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {featureNames.map((feature, index) => (
            <tr
              key={feature}
              className={`${index % 2 != 0 ? 'bg-[#fcfaff]' : 'bg-white'}`}
            >
              <td className='py-3 px-6 text-[#656565]'>{feature}</td>
              {plans.map(plan => (
                <td
                  key={plan.name}
                  className='py-3 px-6 text-center text-[$656565]'
                >
                  {plan.features[feature]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PricingTable
