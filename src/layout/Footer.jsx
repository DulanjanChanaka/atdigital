import React from 'react';
import logo from '../assets/Logo.png'


function Footer() {
  return (
    <div className='bg-[#6B3CC9] w-full '>;

      <div className='lg:flex-row md:flex md:flex-col px-[20px] lg:justify-around xl:justify-around'>
        <div className='mb-10 lg:w-[438px]'>
         <img src={logo} alt="logo" className='mb-4'/>
          <div><p className='text-white font-[400] '>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p></div>
        </div>
        <div className='md:flex-row flex flex-col  md:gap-20 md:mb-5 '>
          <div >
            <div><p className='text-white font-[600] text-[21px] mb-2 '>Our Technologies</p></div>
            <div>
              <ul className='text-white font-[500] text-[14px] leading-7 '>
                <li >ReactJS</li>
                <li>Gatsby</li>
                <li>NextJS</li>
                <li>NodeJS</li>
                <li>GraphQL</li>
                <li>Laravel</li>
              </ul>
            </div>
          </div>
          <div className='mb-5 '>
            <div><p className='text-white font-[600] text-[21px] mt-10 md:mt-0 mb-2'>Our Services</p></div>
            <div><ul className='text-white font-[500] text-[14px] leading-7'>
              <li>Social media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
              <li>Google Marketing solutions</li>
              <li>Search Engine Optimization</li>
            </ul></div>
          </div>
        </div>

      </div>
      <div>
        <div className='py-[1px] bg-white  mx-10 lg:mx-[250px]'></div>
        <div className='text-center justify-center py-4 flex flex-row text-white'>
          {/* <p className='text-white'>Privacy Policy  |  Terms & Conditions</p> */}
          <p>Privacy Policy </p>
          <div className='px-[1px] mx-3 bg-white'/>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;