import Image from 'next/image'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import overView from '@/app/assets/images/overView.png'
import phoneImage from '@/app/assets/images/phoneImage.png'
import testimonialImage from '@/app/assets/images/testimonialImage.png'
import appointments from '@/app/assets/images/appointments.png'
import quotations from '@/app/assets/svgs/quotations.svg'
import chat from '@/app/assets/svgs/chat.svg'
import discover from '@/app/assets/svgs/discover.svg'

export default function Home () {
  const cards = [
    {
      icon: discover,
      title: 'Get Discovered',
      detail:
        'Dutiful is more than just a business directory; it also enhances your web profile. The platform makes use of SEO techniques to boost each listing’s performance in the SERPs, providing any business the chance to rank, regardless of how strong their current online presence is.'
    },
    {
      icon: chat,
      title: 'Instant Chat',
      detail:
        'You’ll be able to chat and send voice recordings with potential and existing customers, including managing your captured leads anytime, anywhere via the platform'
    },
    {
      icon: quotations,
      title: 'Quotations',
      detail:
        'In addition to providing customers with access to information, offering customer quotations is very advantageous to the way you conduct your business. On Dutiful, you’ll be able to send and receive quotation from customers - an important step in lead management.'
    }
  ]

  return (
    <main className='min-h-screen flex flex-col'>
      <Navbar />

      {/* main content */}
      <section className='sm:mt-14 mt-10'>
        <div className='lg:flex justify-between items-center mx-auto w-[90%] gap-10 my-10'>
          <div className='lg:w-[50%] w-full'>
            <h2 className='text-[#230B34] md:text-4xl text-2xl recoleta max-w-[470px] sm:leading-[46px] leading-[35px] mb-5'>
              List and grow your business  with just few clicks
            </h2>

            <p className='max-w-[557px] text-[#383838] sm:text-xl leading-[28px] mb-20'>
              Eliminate manual work and save time by listing your business or
              service on the best business directory in Nigeria.
            </p>
          </div>

          <Image
            src={overView}
            alt='overview image'
            className='lg:w-[50%] w-full'
          />
        </div>

        <div className='lg:flex justify-between items-center mx-auto w-[90%] gap-7 my-10'>
          <Image
            src={testimonialImage}
            alt='testimonial image'
            className='lg:w-[50%] w-full'
          />

          <div className='lg:w-[50%] w-full'>
            <h2 className='text-[#230B34] md:text-4xl text-2xl recoleta max-w-[470px] sm:leading-[46px] leading-[35px] mb-5'>
              Collect reviews and ratings from customers
            </h2>

            <p className='max-w-[557px] text-[#383838] sm:text-xl leading-[28px] mb-20'>
              Accelerate your business reputation by 90% and gain social
              proof through reviews and ratings requested from customers.
            </p>
          </div>
        </div>

        <div className='lg:flex justify-between items-center mx-auto w-[90%] gap-7 my-10 bg-[#FCFAFF] p-10 rounded-[24px] mb-20'>
          <Image
            src={phoneImage}
            alt='phone image'
            // className='lg:min-w-[1000px] lg:ml-[-50px] w-full'
            className='lg:w-[80%] lg:ml-[-50px] w-full'
          />

          <div className='lg:w-[50%] lg:ml-[-28%] w-full'>
            {cards?.map(({ icon, title, detail }, index) => (
              <div
                key={index}
                className={`bg-white p-5 rounded-[26px] shadow-lightCardShadow mb-5 lg:max-w-[480px] ${
                  index == 1 ? 'lg:ml-[-85px] z-30 relative' : ''
                }`}
              >
                <Image src={icon} alt={`${title} icon`} />

                <h4 className='text-[#464646] sm:text-xl font-semibold my-2'>
                  {title}
                </h4>

                <p className='text-[#464646] leading-[24px]'>{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='flex lg:flex-row flex-col-reverse justify-between items-center mx-auto w-[90%] gap-10 my-10'>
          <Image
            src={appointments}
            alt='appointments image'
            className='lg:w-[50%] w-full'
          />

          <div className='lg:w-[50%] w-full'>
            <h2 className='text-[#230B34] md:text-4xl text-2xl recoleta max-w-[470px] sm:leading-[46px] leading-[35px] mb-5'>
              Accept and sell appointments
            </h2>

            <p className='max-w-[557px] text-[#383838] sm:text-xl leading-[28px] mb-20'>
              Let customers book their own appointment or consultation. Start
              accepting payments for appointments through your booking page.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
