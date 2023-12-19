import React from 'react'
import imagetwo from '../assets/image2.png'

function MiddleTwo() {
  return (

<div className='h-[572.82px] md:h-[370px] flex flex-col md:flex-row items-center justify-center pb-[90px] '>
  <div className='order-2 md:order-1 text-center md:text-justify md:w-[393px] lg:w-[530px]  w-[335px]'>
    <div className='font-[600] text-[#6B3CC9] text-[27px] md:text-start lg:mb-5 mb-2'>
      <p >Digital Strategy Consulting</p>
    </div>
    <div style={{ paddingBottom: "35px" }}>
      <p className='font-[400] text-[16px]'>
        Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
      </p>
    </div>
    <div>
      <button className='bg-[#F28D35] rounded-[4px] text-white w-[129px] h-[38px]'>LEARN MORE</button>
    </div>
  </div>
  <div className='order-1 md:order-2'>
    <img src={imagetwo} width="275" height="275" alt="imageone" className='w-[275px] h-[275.82px] lg:w-[346px] lg:h-[348px]' />
  </div>
</div>

  )
}

export default MiddleTwo